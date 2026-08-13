# `dataAwsccEntityresolutionIdMappingWorkflow` Submodule <a name="`dataAwsccEntityresolutionIdMappingWorkflow` Submodule" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEntityresolutionIdMappingWorkflow <a name="DataAwsccEntityresolutionIdMappingWorkflow" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/entityresolution_id_mapping_workflow awscc_entityresolution_id_mapping_workflow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

dataawsccentityresolutionidmappingworkflow.NewDataAwsccEntityresolutionIdMappingWorkflow(scope Construct, id *string, config DataAwsccEntityresolutionIdMappingWorkflowConfig) DataAwsccEntityresolutionIdMappingWorkflow
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig">DataAwsccEntityresolutionIdMappingWorkflowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig">DataAwsccEntityresolutionIdMappingWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEntityresolutionIdMappingWorkflow resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

dataawsccentityresolutionidmappingworkflow.DataAwsccEntityresolutionIdMappingWorkflow_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

dataawsccentityresolutionidmappingworkflow.DataAwsccEntityresolutionIdMappingWorkflow_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

dataawsccentityresolutionidmappingworkflow.DataAwsccEntityresolutionIdMappingWorkflow_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

dataawsccentityresolutionidmappingworkflow.DataAwsccEntityresolutionIdMappingWorkflow_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEntityresolutionIdMappingWorkflow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEntityresolutionIdMappingWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEntityresolutionIdMappingWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/entityresolution_id_mapping_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEntityresolutionIdMappingWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.idMappingIncrementalRunConfig">IdMappingIncrementalRunConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.idMappingTechniques">IdMappingTechniques</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.inputSourceConfig">InputSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList">DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.outputSourceConfig">OutputSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList">DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList">DataAwsccEntityresolutionIdMappingWorkflowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.workflowArn">WorkflowArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.workflowName">WorkflowName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IdMappingIncrementalRunConfig`<sup>Required</sup> <a name="IdMappingIncrementalRunConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.idMappingIncrementalRunConfig"></a>

```go
func IdMappingIncrementalRunConfig() DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference</a>

---

##### `IdMappingTechniques`<sup>Required</sup> <a name="IdMappingTechniques" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.idMappingTechniques"></a>

```go
func IdMappingTechniques() DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference</a>

---

##### `InputSourceConfig`<sup>Required</sup> <a name="InputSourceConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.inputSourceConfig"></a>

```go
func InputSourceConfig() DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList">DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList</a>

---

##### `OutputSourceConfig`<sup>Required</sup> <a name="OutputSourceConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.outputSourceConfig"></a>

```go
func OutputSourceConfig() DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList">DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.tags"></a>

```go
func Tags() DataAwsccEntityresolutionIdMappingWorkflowTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList">DataAwsccEntityresolutionIdMappingWorkflowTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `WorkflowArn`<sup>Required</sup> <a name="WorkflowArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.workflowArn"></a>

```go
func WorkflowArn() *string
```

- *Type:* *string

---

##### `WorkflowName`<sup>Required</sup> <a name="WorkflowName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.workflowName"></a>

```go
func WorkflowName() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEntityresolutionIdMappingWorkflowConfig <a name="DataAwsccEntityresolutionIdMappingWorkflowConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

&dataawsccentityresolutionidmappingworkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/entityresolution_id_mapping_workflow#id DataAwsccEntityresolutionIdMappingWorkflow#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

&dataawsccentityresolutionidmappingworkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig {

}
```


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

&dataawsccentityresolutionidmappingworkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques {

}
```


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

&dataawsccentityresolutionidmappingworkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties {

}
```


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

&dataawsccentityresolutionidmappingworkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration {

}
```


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

&dataawsccentityresolutionidmappingworkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties {

}
```


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

&dataawsccentityresolutionidmappingworkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules {

}
```


### DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig <a name="DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

&dataawsccentityresolutionidmappingworkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig {

}
```


### DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig <a name="DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

&dataawsccentityresolutionidmappingworkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig {

}
```


### DataAwsccEntityresolutionIdMappingWorkflowTags <a name="DataAwsccEntityresolutionIdMappingWorkflowTags" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

&dataawsccentityresolutionidmappingworkflow.DataAwsccEntityresolutionIdMappingWorkflowTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

dataawsccentityresolutionidmappingworkflow.NewDataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.incrementalRunType">IncrementalRunType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncrementalRunType`<sup>Required</sup> <a name="IncrementalRunType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.incrementalRunType"></a>

```go
func IncrementalRunType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a>

---


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

dataawsccentityresolutionidmappingworkflow.NewDataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.idMappingType">IdMappingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.normalizationVersion">NormalizationVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.providerProperties">ProviderProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.ruleBasedProperties">RuleBasedProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdMappingType`<sup>Required</sup> <a name="IdMappingType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.idMappingType"></a>

```go
func IdMappingType() *string
```

- *Type:* *string

---

##### `NormalizationVersion`<sup>Required</sup> <a name="NormalizationVersion" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.normalizationVersion"></a>

```go
func NormalizationVersion() *string
```

- *Type:* *string

---

##### `ProviderProperties`<sup>Required</sup> <a name="ProviderProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.providerProperties"></a>

```go
func ProviderProperties() DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference</a>

---

##### `RuleBasedProperties`<sup>Required</sup> <a name="RuleBasedProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.ruleBasedProperties"></a>

```go
func RuleBasedProperties() DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques</a>

---


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

dataawsccentityresolutionidmappingworkflow.NewDataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3Path">IntermediateS3Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntermediateS3Path`<sup>Required</sup> <a name="IntermediateS3Path" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3Path"></a>

```go
func IntermediateS3Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

---


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

dataawsccentityresolutionidmappingworkflow.NewDataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfiguration">IntermediateSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerConfiguration">ProviderConfiguration</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerServiceArn">ProviderServiceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntermediateSourceConfiguration`<sup>Required</sup> <a name="IntermediateSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfiguration"></a>

```go
func IntermediateSourceConfiguration() DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference</a>

---

##### `ProviderConfiguration`<sup>Required</sup> <a name="ProviderConfiguration" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerConfiguration"></a>

```go
func ProviderConfiguration() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `ProviderServiceArn`<sup>Required</sup> <a name="ProviderServiceArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerServiceArn"></a>

```go
func ProviderServiceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a>

---


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

dataawsccentityresolutionidmappingworkflow.NewDataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModel">AttributeMatchingModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.recordMatchingModel">RecordMatchingModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.ruleDefinitionType">RuleDefinitionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeMatchingModel`<sup>Required</sup> <a name="AttributeMatchingModel" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModel"></a>

```go
func AttributeMatchingModel() *string
```

- *Type:* *string

---

##### `RecordMatchingModel`<sup>Required</sup> <a name="RecordMatchingModel" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.recordMatchingModel"></a>

```go
func RecordMatchingModel() *string
```

- *Type:* *string

---

##### `RuleDefinitionType`<sup>Required</sup> <a name="RuleDefinitionType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.ruleDefinitionType"></a>

```go
func RuleDefinitionType() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.rules"></a>

```go
func Rules() DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a>

---


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

dataawsccentityresolutionidmappingworkflow.NewDataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.get"></a>

```go
func Get(index *f64) DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

dataawsccentityresolutionidmappingworkflow.NewDataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeys">MatchingKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchingKeys`<sup>Required</sup> <a name="MatchingKeys" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeys"></a>

```go
func MatchingKeys() *[]*string
```

- *Type:* *[]*string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>

---


### DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList <a name="DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

dataawsccentityresolutionidmappingworkflow.NewDataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.get"></a>

```go
func Get(index *f64) DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

dataawsccentityresolutionidmappingworkflow.NewDataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.inputSourceArn">InputSourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.schemaArn">SchemaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig">DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputSourceArn`<sup>Required</sup> <a name="InputSourceArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.inputSourceArn"></a>

```go
func InputSourceArn() *string
```

- *Type:* *string

---

##### `SchemaArn`<sup>Required</sup> <a name="SchemaArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.schemaArn"></a>

```go
func SchemaArn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig">DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig</a>

---


### DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList <a name="DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

dataawsccentityresolutionidmappingworkflow.NewDataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.get"></a>

```go
func Get(index *f64) DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

dataawsccentityresolutionidmappingworkflow.NewDataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.kmsArn">KmsArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.outputS3Path">OutputS3Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig">DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsArn`<sup>Required</sup> <a name="KmsArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.kmsArn"></a>

```go
func KmsArn() *string
```

- *Type:* *string

---

##### `OutputS3Path`<sup>Required</sup> <a name="OutputS3Path" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.outputS3Path"></a>

```go
func OutputS3Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig">DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig</a>

---


### DataAwsccEntityresolutionIdMappingWorkflowTagsList <a name="DataAwsccEntityresolutionIdMappingWorkflowTagsList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

dataawsccentityresolutionidmappingworkflow.NewDataAwsccEntityresolutionIdMappingWorkflowTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEntityresolutionIdMappingWorkflowTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidmappingworkflow"

dataawsccentityresolutionidmappingworkflow.NewDataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTags">DataAwsccEntityresolutionIdMappingWorkflowTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionIdMappingWorkflowTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTags">DataAwsccEntityresolutionIdMappingWorkflowTags</a>

---



