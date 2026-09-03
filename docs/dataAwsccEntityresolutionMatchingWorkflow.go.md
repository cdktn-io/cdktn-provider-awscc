# `dataAwsccEntityresolutionMatchingWorkflow` Submodule <a name="`dataAwsccEntityresolutionMatchingWorkflow` Submodule" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEntityresolutionMatchingWorkflow <a name="DataAwsccEntityresolutionMatchingWorkflow" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/entityresolution_matching_workflow awscc_entityresolution_matching_workflow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.NewDataAwsccEntityresolutionMatchingWorkflow(scope Construct, id *string, config DataAwsccEntityresolutionMatchingWorkflowConfig) DataAwsccEntityresolutionMatchingWorkflow
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig">DataAwsccEntityresolutionMatchingWorkflowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig">DataAwsccEntityresolutionMatchingWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEntityresolutionMatchingWorkflow resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.DataAwsccEntityresolutionMatchingWorkflow_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.DataAwsccEntityresolutionMatchingWorkflow_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.DataAwsccEntityresolutionMatchingWorkflow_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.DataAwsccEntityresolutionMatchingWorkflow_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEntityresolutionMatchingWorkflow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEntityresolutionMatchingWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEntityresolutionMatchingWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/entityresolution_matching_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEntityresolutionMatchingWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.incrementalRunConfig">IncrementalRunConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference">DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.inputSourceConfig">InputSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList">DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.outputSourceConfig">OutputSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList">DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.resolutionTechniques">ResolutionTechniques</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList">DataAwsccEntityresolutionMatchingWorkflowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.workflowArn">WorkflowArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.workflowName">WorkflowName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IncrementalRunConfig`<sup>Required</sup> <a name="IncrementalRunConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.incrementalRunConfig"></a>

```go
func IncrementalRunConfig() DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference">DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference</a>

---

##### `InputSourceConfig`<sup>Required</sup> <a name="InputSourceConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.inputSourceConfig"></a>

```go
func InputSourceConfig() DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList">DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList</a>

---

##### `OutputSourceConfig`<sup>Required</sup> <a name="OutputSourceConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.outputSourceConfig"></a>

```go
func OutputSourceConfig() DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList">DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList</a>

---

##### `ResolutionTechniques`<sup>Required</sup> <a name="ResolutionTechniques" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.resolutionTechniques"></a>

```go
func ResolutionTechniques() DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.tags"></a>

```go
func Tags() DataAwsccEntityresolutionMatchingWorkflowTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList">DataAwsccEntityresolutionMatchingWorkflowTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `WorkflowArn`<sup>Required</sup> <a name="WorkflowArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.workflowArn"></a>

```go
func WorkflowArn() *string
```

- *Type:* *string

---

##### `WorkflowName`<sup>Required</sup> <a name="WorkflowName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.workflowName"></a>

```go
func WorkflowName() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflow.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEntityresolutionMatchingWorkflowConfig <a name="DataAwsccEntityresolutionMatchingWorkflowConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

&dataawsccentityresolutionmatchingworkflow.DataAwsccEntityresolutionMatchingWorkflowConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/entityresolution_matching_workflow#id DataAwsccEntityresolutionMatchingWorkflow#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig <a name="DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

&dataawsccentityresolutionmatchingworkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig {

}
```


### DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig <a name="DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

&dataawsccentityresolutionmatchingworkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig {

}
```


### DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig <a name="DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

&dataawsccentityresolutionmatchingworkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig {

}
```


### DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig <a name="DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

&dataawsccentityresolutionmatchingworkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig {

}
```


### DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput <a name="DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

&dataawsccentityresolutionmatchingworkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput {

}
```


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

&dataawsccentityresolutionmatchingworkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques {

}
```


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

&dataawsccentityresolutionmatchingworkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties {

}
```


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

&dataawsccentityresolutionmatchingworkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration {

}
```


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

&dataawsccentityresolutionmatchingworkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties {

}
```


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

&dataawsccentityresolutionmatchingworkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules {

}
```


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

&dataawsccentityresolutionmatchingworkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties {

}
```


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

&dataawsccentityresolutionmatchingworkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig {

}
```


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

&dataawsccentityresolutionmatchingworkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules {

}
```


### DataAwsccEntityresolutionMatchingWorkflowTags <a name="DataAwsccEntityresolutionMatchingWorkflowTags" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

&dataawsccentityresolutionmatchingworkflow.DataAwsccEntityresolutionMatchingWorkflowTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.NewDataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.incrementalRunType">IncrementalRunType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig">DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncrementalRunType`<sup>Required</sup> <a name="IncrementalRunType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.incrementalRunType"></a>

```go
func IncrementalRunType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig">DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig</a>

---


### DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList <a name="DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.NewDataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.get"></a>

```go
func Get(index *f64) DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.NewDataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.applyNormalization">ApplyNormalization</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.inputSourceArn">InputSourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.schemaArn">SchemaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig">DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplyNormalization`<sup>Required</sup> <a name="ApplyNormalization" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.applyNormalization"></a>

```go
func ApplyNormalization() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InputSourceArn`<sup>Required</sup> <a name="InputSourceArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.inputSourceArn"></a>

```go
func InputSourceArn() *string
```

- *Type:* *string

---

##### `SchemaArn`<sup>Required</sup> <a name="SchemaArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.schemaArn"></a>

```go
func SchemaArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig">DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig</a>

---


### DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.NewDataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.domainArn">DomainArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.objectTypeArn">ObjectTypeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig">DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainArn`<sup>Required</sup> <a name="DomainArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.domainArn"></a>

```go
func DomainArn() *string
```

- *Type:* *string

---

##### `ObjectTypeArn`<sup>Required</sup> <a name="ObjectTypeArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.objectTypeArn"></a>

```go
func ObjectTypeArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig">DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig</a>

---


### DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList <a name="DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.NewDataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.get"></a>

```go
func Get(index *f64) DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList <a name="DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.NewDataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.get"></a>

```go
func Get(index *f64) DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.NewDataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.hashed">Hashed</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput">DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hashed`<sup>Required</sup> <a name="Hashed" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.hashed"></a>

```go
func Hashed() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput">DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput</a>

---


### DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.NewDataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.applyNormalization">ApplyNormalization</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.customerProfilesIntegrationConfig">CustomerProfilesIntegrationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference">DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.kmsArn">KmsArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.output">Output</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList">DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.outputS3Path">OutputS3Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig">DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplyNormalization`<sup>Required</sup> <a name="ApplyNormalization" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.applyNormalization"></a>

```go
func ApplyNormalization() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CustomerProfilesIntegrationConfig`<sup>Required</sup> <a name="CustomerProfilesIntegrationConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.customerProfilesIntegrationConfig"></a>

```go
func CustomerProfilesIntegrationConfig() DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference">DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference</a>

---

##### `KmsArn`<sup>Required</sup> <a name="KmsArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.kmsArn"></a>

```go
func KmsArn() *string
```

- *Type:* *string

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.output"></a>

```go
func Output() DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList">DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList</a>

---

##### `OutputS3Path`<sup>Required</sup> <a name="OutputS3Path" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.outputS3Path"></a>

```go
func OutputS3Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig">DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig</a>

---


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.NewDataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.enableRealTimeMatching">EnableRealTimeMatching</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.providerProperties">ProviderProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.resolutionType">ResolutionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleBasedProperties">RuleBasedProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleConditionProperties">RuleConditionProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableRealTimeMatching`<sup>Required</sup> <a name="EnableRealTimeMatching" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.enableRealTimeMatching"></a>

```go
func EnableRealTimeMatching() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ProviderProperties`<sup>Required</sup> <a name="ProviderProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.providerProperties"></a>

```go
func ProviderProperties() DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference</a>

---

##### `ResolutionType`<sup>Required</sup> <a name="ResolutionType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.resolutionType"></a>

```go
func ResolutionType() *string
```

- *Type:* *string

---

##### `RuleBasedProperties`<sup>Required</sup> <a name="RuleBasedProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleBasedProperties"></a>

```go
func RuleBasedProperties() DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference</a>

---

##### `RuleConditionProperties`<sup>Required</sup> <a name="RuleConditionProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.ruleConditionProperties"></a>

```go
func RuleConditionProperties() DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques</a>

---


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.NewDataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3Path">IntermediateS3Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntermediateS3Path`<sup>Required</sup> <a name="IntermediateS3Path" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3Path"></a>

```go
func IntermediateS3Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

---


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.NewDataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfiguration">IntermediateSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerConfiguration">ProviderConfiguration</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerServiceArn">ProviderServiceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntermediateSourceConfiguration`<sup>Required</sup> <a name="IntermediateSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfiguration"></a>

```go
func IntermediateSourceConfiguration() DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference</a>

---

##### `ProviderConfiguration`<sup>Required</sup> <a name="ProviderConfiguration" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerConfiguration"></a>

```go
func ProviderConfiguration() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `ProviderServiceArn`<sup>Required</sup> <a name="ProviderServiceArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.providerServiceArn"></a>

```go
func ProviderServiceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties</a>

---


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.NewDataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModel">AttributeMatchingModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.matchPurpose">MatchPurpose</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeMatchingModel`<sup>Required</sup> <a name="AttributeMatchingModel" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModel"></a>

```go
func AttributeMatchingModel() *string
```

- *Type:* *string

---

##### `MatchPurpose`<sup>Required</sup> <a name="MatchPurpose" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.matchPurpose"></a>

```go
func MatchPurpose() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.rules"></a>

```go
func Rules() DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties</a>

---


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.NewDataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.get"></a>

```go
func Get(index *f64) DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.NewDataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeys">MatchingKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchingKeys`<sup>Required</sup> <a name="MatchingKeys" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeys"></a>

```go
func MatchingKeys() *[]*string
```

- *Type:* *[]*string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules</a>

---


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.NewDataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.enableTransitiveMatching">EnableTransitiveMatching</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableTransitiveMatching`<sup>Required</sup> <a name="EnableTransitiveMatching" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.enableTransitiveMatching"></a>

```go
func EnableTransitiveMatching() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig</a>

---


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.NewDataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.matchingConfig">MatchingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchingConfig`<sup>Required</sup> <a name="MatchingConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.matchingConfig"></a>

```go
func MatchingConfig() DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.rules"></a>

```go
func Rules() DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties</a>

---


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.NewDataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.get"></a>

```go
func Get(index *f64) DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.NewDataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules">DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules</a>

---


### DataAwsccEntityresolutionMatchingWorkflowTagsList <a name="DataAwsccEntityresolutionMatchingWorkflowTagsList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.NewDataAwsccEntityresolutionMatchingWorkflowTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEntityresolutionMatchingWorkflowTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference <a name="DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionmatchingworkflow"

dataawsccentityresolutionmatchingworkflow.NewDataAwsccEntityresolutionMatchingWorkflowTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTags">DataAwsccEntityresolutionMatchingWorkflowTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionMatchingWorkflowTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionMatchingWorkflow.DataAwsccEntityresolutionMatchingWorkflowTags">DataAwsccEntityresolutionMatchingWorkflowTags</a>

---



