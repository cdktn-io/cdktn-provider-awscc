# `dataAwsccSagemakerProcessingJob` Submodule <a name="`dataAwsccSagemakerProcessingJob` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerProcessingJob <a name="DataAwsccSagemakerProcessingJob" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_processing_job awscc_sagemaker_processing_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.NewDataAwsccSagemakerProcessingJob(scope Construct, id *string, config DataAwsccSagemakerProcessingJobConfig) DataAwsccSagemakerProcessingJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig">DataAwsccSagemakerProcessingJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig">DataAwsccSagemakerProcessingJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerProcessingJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.DataAwsccSagemakerProcessingJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.DataAwsccSagemakerProcessingJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.DataAwsccSagemakerProcessingJob_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.DataAwsccSagemakerProcessingJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccSagemakerProcessingJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccSagemakerProcessingJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccSagemakerProcessingJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_processing_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerProcessingJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.appSpecification">AppSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference">DataAwsccSagemakerProcessingJobAppSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.autoMlJobArn">AutoMlJobArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.environment">Environment</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.exitMessage">ExitMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.experimentConfig">ExperimentConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference">DataAwsccSagemakerProcessingJobExperimentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.failureReason">FailureReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.monitoringScheduleArn">MonitoringScheduleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference">DataAwsccSagemakerProcessingJobNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingEndTime">ProcessingEndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingInputs">ProcessingInputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList">DataAwsccSagemakerProcessingJobProcessingInputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingJobArn">ProcessingJobArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingJobName">ProcessingJobName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingJobStatus">ProcessingJobStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingOutputConfig">ProcessingOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingResources">ProcessingResources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference">DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingStartTime">ProcessingStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.stoppingCondition">StoppingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference">DataAwsccSagemakerProcessingJobStoppingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList">DataAwsccSagemakerProcessingJobTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.trainingJobArn">TrainingJobArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AppSpecification`<sup>Required</sup> <a name="AppSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.appSpecification"></a>

```go
func AppSpecification() DataAwsccSagemakerProcessingJobAppSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference">DataAwsccSagemakerProcessingJobAppSpecificationOutputReference</a>

---

##### `AutoMlJobArn`<sup>Required</sup> <a name="AutoMlJobArn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.autoMlJobArn"></a>

```go
func AutoMlJobArn() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.environment"></a>

```go
func Environment() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `ExitMessage`<sup>Required</sup> <a name="ExitMessage" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.exitMessage"></a>

```go
func ExitMessage() *string
```

- *Type:* *string

---

##### `ExperimentConfig`<sup>Required</sup> <a name="ExperimentConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.experimentConfig"></a>

```go
func ExperimentConfig() DataAwsccSagemakerProcessingJobExperimentConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference">DataAwsccSagemakerProcessingJobExperimentConfigOutputReference</a>

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.failureReason"></a>

```go
func FailureReason() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *string
```

- *Type:* *string

---

##### `MonitoringScheduleArn`<sup>Required</sup> <a name="MonitoringScheduleArn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.monitoringScheduleArn"></a>

```go
func MonitoringScheduleArn() *string
```

- *Type:* *string

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.networkConfig"></a>

```go
func NetworkConfig() DataAwsccSagemakerProcessingJobNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference">DataAwsccSagemakerProcessingJobNetworkConfigOutputReference</a>

---

##### `ProcessingEndTime`<sup>Required</sup> <a name="ProcessingEndTime" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingEndTime"></a>

```go
func ProcessingEndTime() *string
```

- *Type:* *string

---

##### `ProcessingInputs`<sup>Required</sup> <a name="ProcessingInputs" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingInputs"></a>

```go
func ProcessingInputs() DataAwsccSagemakerProcessingJobProcessingInputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList">DataAwsccSagemakerProcessingJobProcessingInputsList</a>

---

##### `ProcessingJobArn`<sup>Required</sup> <a name="ProcessingJobArn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingJobArn"></a>

```go
func ProcessingJobArn() *string
```

- *Type:* *string

---

##### `ProcessingJobName`<sup>Required</sup> <a name="ProcessingJobName" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingJobName"></a>

```go
func ProcessingJobName() *string
```

- *Type:* *string

---

##### `ProcessingJobStatus`<sup>Required</sup> <a name="ProcessingJobStatus" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingJobStatus"></a>

```go
func ProcessingJobStatus() *string
```

- *Type:* *string

---

##### `ProcessingOutputConfig`<sup>Required</sup> <a name="ProcessingOutputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingOutputConfig"></a>

```go
func ProcessingOutputConfig() DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference</a>

---

##### `ProcessingResources`<sup>Required</sup> <a name="ProcessingResources" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingResources"></a>

```go
func ProcessingResources() DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference">DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference</a>

---

##### `ProcessingStartTime`<sup>Required</sup> <a name="ProcessingStartTime" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingStartTime"></a>

```go
func ProcessingStartTime() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `StoppingCondition`<sup>Required</sup> <a name="StoppingCondition" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.stoppingCondition"></a>

```go
func StoppingCondition() DataAwsccSagemakerProcessingJobStoppingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference">DataAwsccSagemakerProcessingJobStoppingConditionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.tags"></a>

```go
func Tags() DataAwsccSagemakerProcessingJobTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList">DataAwsccSagemakerProcessingJobTagsList</a>

---

##### `TrainingJobArn`<sup>Required</sup> <a name="TrainingJobArn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.trainingJobArn"></a>

```go
func TrainingJobArn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerProcessingJobAppSpecification <a name="DataAwsccSagemakerProcessingJobAppSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

&dataawsccsagemakerprocessingjob.DataAwsccSagemakerProcessingJobAppSpecification {

}
```


### DataAwsccSagemakerProcessingJobConfig <a name="DataAwsccSagemakerProcessingJobConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

&dataawsccsagemakerprocessingjob.DataAwsccSagemakerProcessingJobConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_processing_job#id DataAwsccSagemakerProcessingJob#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerProcessingJobExperimentConfig <a name="DataAwsccSagemakerProcessingJobExperimentConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

&dataawsccsagemakerprocessingjob.DataAwsccSagemakerProcessingJobExperimentConfig {

}
```


### DataAwsccSagemakerProcessingJobNetworkConfig <a name="DataAwsccSagemakerProcessingJobNetworkConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

&dataawsccsagemakerprocessingjob.DataAwsccSagemakerProcessingJobNetworkConfig {

}
```


### DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig <a name="DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

&dataawsccsagemakerprocessingjob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig {

}
```


### DataAwsccSagemakerProcessingJobProcessingInputs <a name="DataAwsccSagemakerProcessingJobProcessingInputs" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

&dataawsccsagemakerprocessingjob.DataAwsccSagemakerProcessingJobProcessingInputs {

}
```


### DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition <a name="DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

&dataawsccsagemakerprocessingjob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition {

}
```


### DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition <a name="DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

&dataawsccsagemakerprocessingjob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition {

}
```


### DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition <a name="DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

&dataawsccsagemakerprocessingjob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition {

}
```


### DataAwsccSagemakerProcessingJobProcessingInputsS3Input <a name="DataAwsccSagemakerProcessingJobProcessingInputsS3Input" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3Input"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3Input.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

&dataawsccsagemakerprocessingjob.DataAwsccSagemakerProcessingJobProcessingInputsS3Input {

}
```


### DataAwsccSagemakerProcessingJobProcessingOutputConfig <a name="DataAwsccSagemakerProcessingJobProcessingOutputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

&dataawsccsagemakerprocessingjob.DataAwsccSagemakerProcessingJobProcessingOutputConfig {

}
```


### DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs <a name="DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

&dataawsccsagemakerprocessingjob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs {

}
```


### DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput <a name="DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

&dataawsccsagemakerprocessingjob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput {

}
```


### DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output <a name="DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

&dataawsccsagemakerprocessingjob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output {

}
```


### DataAwsccSagemakerProcessingJobProcessingResources <a name="DataAwsccSagemakerProcessingJobProcessingResources" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

&dataawsccsagemakerprocessingjob.DataAwsccSagemakerProcessingJobProcessingResources {

}
```


### DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig <a name="DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

&dataawsccsagemakerprocessingjob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig {

}
```


### DataAwsccSagemakerProcessingJobStoppingCondition <a name="DataAwsccSagemakerProcessingJobStoppingCondition" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

&dataawsccsagemakerprocessingjob.DataAwsccSagemakerProcessingJobStoppingCondition {

}
```


### DataAwsccSagemakerProcessingJobTags <a name="DataAwsccSagemakerProcessingJobTags" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

&dataawsccsagemakerprocessingjob.DataAwsccSagemakerProcessingJobTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerProcessingJobAppSpecificationOutputReference <a name="DataAwsccSagemakerProcessingJobAppSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.NewDataAwsccSagemakerProcessingJobAppSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerProcessingJobAppSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.property.containerArguments">ContainerArguments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.property.containerEntrypoint">ContainerEntrypoint</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.property.imageUri">ImageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecification">DataAwsccSagemakerProcessingJobAppSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerArguments`<sup>Required</sup> <a name="ContainerArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.property.containerArguments"></a>

```go
func ContainerArguments() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerEntrypoint`<sup>Required</sup> <a name="ContainerEntrypoint" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.property.containerEntrypoint"></a>

```go
func ContainerEntrypoint() *[]*string
```

- *Type:* *[]*string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.property.imageUri"></a>

```go
func ImageUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerProcessingJobAppSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecification">DataAwsccSagemakerProcessingJobAppSpecification</a>

---


### DataAwsccSagemakerProcessingJobExperimentConfigOutputReference <a name="DataAwsccSagemakerProcessingJobExperimentConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.NewDataAwsccSagemakerProcessingJobExperimentConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerProcessingJobExperimentConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.experimentName">ExperimentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.runName">RunName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.trialComponentDisplayName">TrialComponentDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.trialName">TrialName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfig">DataAwsccSagemakerProcessingJobExperimentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExperimentName`<sup>Required</sup> <a name="ExperimentName" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.experimentName"></a>

```go
func ExperimentName() *string
```

- *Type:* *string

---

##### `RunName`<sup>Required</sup> <a name="RunName" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.runName"></a>

```go
func RunName() *string
```

- *Type:* *string

---

##### `TrialComponentDisplayName`<sup>Required</sup> <a name="TrialComponentDisplayName" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.trialComponentDisplayName"></a>

```go
func TrialComponentDisplayName() *string
```

- *Type:* *string

---

##### `TrialName`<sup>Required</sup> <a name="TrialName" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.trialName"></a>

```go
func TrialName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerProcessingJobExperimentConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfig">DataAwsccSagemakerProcessingJobExperimentConfig</a>

---


### DataAwsccSagemakerProcessingJobNetworkConfigOutputReference <a name="DataAwsccSagemakerProcessingJobNetworkConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.NewDataAwsccSagemakerProcessingJobNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerProcessingJobNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption">EnableInterContainerTrafficEncryption</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference">DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfig">DataAwsccSagemakerProcessingJobNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableInterContainerTrafficEncryption`<sup>Required</sup> <a name="EnableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption"></a>

```go
func EnableInterContainerTrafficEncryption() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EnableNetworkIsolation`<sup>Required</sup> <a name="EnableNetworkIsolation" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.property.enableNetworkIsolation"></a>

```go
func EnableNetworkIsolation() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.property.vpcConfig"></a>

```go
func VpcConfig() DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference">DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerProcessingJobNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfig">DataAwsccSagemakerProcessingJobNetworkConfig</a>

---


### DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference <a name="DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.NewDataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig">DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig">DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig</a>

---


### DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference <a name="DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.NewDataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputCompression">OutputCompression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputS3Uri">OutputS3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.queryString">QueryString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.workGroup">WorkGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `OutputCompression`<sup>Required</sup> <a name="OutputCompression" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputCompression"></a>

```go
func OutputCompression() *string
```

- *Type:* *string

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputFormat"></a>

```go
func OutputFormat() *string
```

- *Type:* *string

---

##### `OutputS3Uri`<sup>Required</sup> <a name="OutputS3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputS3Uri"></a>

```go
func OutputS3Uri() *string
```

- *Type:* *string

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.queryString"></a>

```go
func QueryString() *string
```

- *Type:* *string

---

##### `WorkGroup`<sup>Required</sup> <a name="WorkGroup" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.workGroup"></a>

```go
func WorkGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a>

---


### DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference <a name="DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.NewDataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.athenaDatasetDefinition">AthenaDatasetDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference">DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.dataDistributionType">DataDistributionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.inputMode">InputMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.localPath">LocalPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.redshiftDatasetDefinition">RedshiftDatasetDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference">DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition">DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AthenaDatasetDefinition`<sup>Required</sup> <a name="AthenaDatasetDefinition" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.athenaDatasetDefinition"></a>

```go
func AthenaDatasetDefinition() DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference">DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference</a>

---

##### `DataDistributionType`<sup>Required</sup> <a name="DataDistributionType" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.dataDistributionType"></a>

```go
func DataDistributionType() *string
```

- *Type:* *string

---

##### `InputMode`<sup>Required</sup> <a name="InputMode" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.inputMode"></a>

```go
func InputMode() *string
```

- *Type:* *string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.localPath"></a>

```go
func LocalPath() *string
```

- *Type:* *string

---

##### `RedshiftDatasetDefinition`<sup>Required</sup> <a name="RedshiftDatasetDefinition" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.redshiftDatasetDefinition"></a>

```go
func RedshiftDatasetDefinition() DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference">DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition">DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition</a>

---


### DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference <a name="DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.NewDataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterRoleArn">ClusterRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.dbUser">DbUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputCompression">OutputCompression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputS3Uri">OutputS3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.queryString">QueryString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `ClusterRoleArn`<sup>Required</sup> <a name="ClusterRoleArn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterRoleArn"></a>

```go
func ClusterRoleArn() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `DbUser`<sup>Required</sup> <a name="DbUser" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.dbUser"></a>

```go
func DbUser() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `OutputCompression`<sup>Required</sup> <a name="OutputCompression" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputCompression"></a>

```go
func OutputCompression() *string
```

- *Type:* *string

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputFormat"></a>

```go
func OutputFormat() *string
```

- *Type:* *string

---

##### `OutputS3Uri`<sup>Required</sup> <a name="OutputS3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputS3Uri"></a>

```go
func OutputS3Uri() *string
```

- *Type:* *string

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.queryString"></a>

```go
func QueryString() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a>

---


### DataAwsccSagemakerProcessingJobProcessingInputsList <a name="DataAwsccSagemakerProcessingJobProcessingInputsList" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.NewDataAwsccSagemakerProcessingJobProcessingInputsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerProcessingJobProcessingInputsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerProcessingJobProcessingInputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerProcessingJobProcessingInputsOutputReference <a name="DataAwsccSagemakerProcessingJobProcessingInputsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.NewDataAwsccSagemakerProcessingJobProcessingInputsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerProcessingJobProcessingInputsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.appManaged">AppManaged</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.datasetDefinition">DatasetDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference">DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.inputName">InputName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference">DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputs">DataAwsccSagemakerProcessingJobProcessingInputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppManaged`<sup>Required</sup> <a name="AppManaged" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.appManaged"></a>

```go
func AppManaged() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DatasetDefinition`<sup>Required</sup> <a name="DatasetDefinition" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.datasetDefinition"></a>

```go
func DatasetDefinition() DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference">DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference</a>

---

##### `InputName`<sup>Required</sup> <a name="InputName" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.inputName"></a>

```go
func InputName() *string
```

- *Type:* *string

---

##### `S3Input`<sup>Required</sup> <a name="S3Input" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.s3Input"></a>

```go
func S3Input() DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference">DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerProcessingJobProcessingInputs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputs">DataAwsccSagemakerProcessingJobProcessingInputs</a>

---


### DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference <a name="DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.NewDataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.localPath">LocalPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3CompressionType">S3CompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataType">S3DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3InputMode">S3InputMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3Input">DataAwsccSagemakerProcessingJobProcessingInputsS3Input</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.localPath"></a>

```go
func LocalPath() *string
```

- *Type:* *string

---

##### `S3CompressionType`<sup>Required</sup> <a name="S3CompressionType" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3CompressionType"></a>

```go
func S3CompressionType() *string
```

- *Type:* *string

---

##### `S3DataDistributionType`<sup>Required</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataDistributionType"></a>

```go
func S3DataDistributionType() *string
```

- *Type:* *string

---

##### `S3DataType`<sup>Required</sup> <a name="S3DataType" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataType"></a>

```go
func S3DataType() *string
```

- *Type:* *string

---

##### `S3InputMode`<sup>Required</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3InputMode"></a>

```go
func S3InputMode() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerProcessingJobProcessingInputsS3Input
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3Input">DataAwsccSagemakerProcessingJobProcessingInputsS3Input</a>

---


### DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference <a name="DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.NewDataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.property.outputs">Outputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfig">DataAwsccSagemakerProcessingJobProcessingOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.property.outputs"></a>

```go
func Outputs() DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerProcessingJobProcessingOutputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfig">DataAwsccSagemakerProcessingJobProcessingOutputConfig</a>

---


### DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference <a name="DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.NewDataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.featureGroupName">FeatureGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FeatureGroupName`<sup>Required</sup> <a name="FeatureGroupName" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.featureGroupName"></a>

```go
func FeatureGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput</a>

---


### DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList <a name="DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.NewDataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference <a name="DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.NewDataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.appManaged">AppManaged</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.featureStoreOutput">FeatureStoreOutput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.outputName">OutputName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.s3Output">S3Output</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppManaged`<sup>Required</sup> <a name="AppManaged" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.appManaged"></a>

```go
func AppManaged() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `FeatureStoreOutput`<sup>Required</sup> <a name="FeatureStoreOutput" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.featureStoreOutput"></a>

```go
func FeatureStoreOutput() DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference</a>

---

##### `OutputName`<sup>Required</sup> <a name="OutputName" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.outputName"></a>

```go
func OutputName() *string
```

- *Type:* *string

---

##### `S3Output`<sup>Required</sup> <a name="S3Output" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.s3Output"></a>

```go
func S3Output() DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs</a>

---


### DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference <a name="DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.NewDataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.localPath">LocalPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3UploadMode">S3UploadMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.localPath"></a>

```go
func LocalPath() *string
```

- *Type:* *string

---

##### `S3UploadMode`<sup>Required</sup> <a name="S3UploadMode" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3UploadMode"></a>

```go
func S3UploadMode() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output</a>

---


### DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference <a name="DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.NewDataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig">DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `VolumeKmsKeyId`<sup>Required</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeKmsKeyId"></a>

```go
func VolumeKmsKeyId() *string
```

- *Type:* *string

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeSizeInGb"></a>

```go
func VolumeSizeInGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig">DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig</a>

---


### DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference <a name="DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.NewDataAwsccSagemakerProcessingJobProcessingResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference">DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResources">DataAwsccSagemakerProcessingJobProcessingResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.property.clusterConfig"></a>

```go
func ClusterConfig() DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference">DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerProcessingJobProcessingResources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResources">DataAwsccSagemakerProcessingJobProcessingResources</a>

---


### DataAwsccSagemakerProcessingJobStoppingConditionOutputReference <a name="DataAwsccSagemakerProcessingJobStoppingConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.NewDataAwsccSagemakerProcessingJobStoppingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerProcessingJobStoppingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.property.maxRuntimeInSeconds">MaxRuntimeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingCondition">DataAwsccSagemakerProcessingJobStoppingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxRuntimeInSeconds`<sup>Required</sup> <a name="MaxRuntimeInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.property.maxRuntimeInSeconds"></a>

```go
func MaxRuntimeInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerProcessingJobStoppingCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingCondition">DataAwsccSagemakerProcessingJobStoppingCondition</a>

---


### DataAwsccSagemakerProcessingJobTagsList <a name="DataAwsccSagemakerProcessingJobTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.NewDataAwsccSagemakerProcessingJobTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerProcessingJobTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerProcessingJobTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerProcessingJobTagsOutputReference <a name="DataAwsccSagemakerProcessingJobTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerprocessingjob"

dataawsccsagemakerprocessingjob.NewDataAwsccSagemakerProcessingJobTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerProcessingJobTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTags">DataAwsccSagemakerProcessingJobTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerProcessingJobTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTags">DataAwsccSagemakerProcessingJobTags</a>

---



