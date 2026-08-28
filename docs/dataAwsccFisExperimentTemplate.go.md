# `dataAwsccFisExperimentTemplate` Submodule <a name="`dataAwsccFisExperimentTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccFisExperimentTemplate <a name="DataAwsccFisExperimentTemplate" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/fis_experiment_template awscc_fis_experiment_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

dataawsccfisexperimenttemplate.NewDataAwsccFisExperimentTemplate(scope Construct, id *string, config DataAwsccFisExperimentTemplateConfig) DataAwsccFisExperimentTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig">DataAwsccFisExperimentTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig">DataAwsccFisExperimentTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccFisExperimentTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

dataawsccfisexperimenttemplate.DataAwsccFisExperimentTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

dataawsccfisexperimenttemplate.DataAwsccFisExperimentTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

dataawsccfisexperimenttemplate.DataAwsccFisExperimentTemplate_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

dataawsccfisexperimenttemplate.DataAwsccFisExperimentTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccFisExperimentTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccFisExperimentTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccFisExperimentTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/fis_experiment_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccFisExperimentTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap">DataAwsccFisExperimentTemplateActionsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.experimentOptions">ExperimentOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference">DataAwsccFisExperimentTemplateExperimentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.experimentReportConfiguration">ExperimentReportConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference">DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.experimentTemplateId">ExperimentTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference">DataAwsccFisExperimentTemplateLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.stopConditions">StopConditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList">DataAwsccFisExperimentTemplateStopConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap">DataAwsccFisExperimentTemplateTargetsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.actions"></a>

```go
func Actions() DataAwsccFisExperimentTemplateActionsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap">DataAwsccFisExperimentTemplateActionsMap</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExperimentOptions`<sup>Required</sup> <a name="ExperimentOptions" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.experimentOptions"></a>

```go
func ExperimentOptions() DataAwsccFisExperimentTemplateExperimentOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference">DataAwsccFisExperimentTemplateExperimentOptionsOutputReference</a>

---

##### `ExperimentReportConfiguration`<sup>Required</sup> <a name="ExperimentReportConfiguration" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.experimentReportConfiguration"></a>

```go
func ExperimentReportConfiguration() DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference">DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference</a>

---

##### `ExperimentTemplateId`<sup>Required</sup> <a name="ExperimentTemplateId" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.experimentTemplateId"></a>

```go
func ExperimentTemplateId() *string
```

- *Type:* *string

---

##### `LogConfiguration`<sup>Required</sup> <a name="LogConfiguration" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.logConfiguration"></a>

```go
func LogConfiguration() DataAwsccFisExperimentTemplateLogConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference">DataAwsccFisExperimentTemplateLogConfigurationOutputReference</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `StopConditions`<sup>Required</sup> <a name="StopConditions" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.stopConditions"></a>

```go
func StopConditions() DataAwsccFisExperimentTemplateStopConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList">DataAwsccFisExperimentTemplateStopConditionsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.targets"></a>

```go
func Targets() DataAwsccFisExperimentTemplateTargetsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap">DataAwsccFisExperimentTemplateTargetsMap</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccFisExperimentTemplateActions <a name="DataAwsccFisExperimentTemplateActions" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

&dataawsccfisexperimenttemplate.DataAwsccFisExperimentTemplateActions {

}
```


### DataAwsccFisExperimentTemplateConfig <a name="DataAwsccFisExperimentTemplateConfig" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

&dataawsccfisexperimenttemplate.DataAwsccFisExperimentTemplateConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/fis_experiment_template#id DataAwsccFisExperimentTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccFisExperimentTemplateExperimentOptions <a name="DataAwsccFisExperimentTemplateExperimentOptions" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

&dataawsccfisexperimenttemplate.DataAwsccFisExperimentTemplateExperimentOptions {

}
```


### DataAwsccFisExperimentTemplateExperimentReportConfiguration <a name="DataAwsccFisExperimentTemplateExperimentReportConfiguration" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

&dataawsccfisexperimenttemplate.DataAwsccFisExperimentTemplateExperimentReportConfiguration {

}
```


### DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources <a name="DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

&dataawsccfisexperimenttemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources {

}
```


### DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards <a name="DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

&dataawsccfisexperimenttemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards {

}
```


### DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs <a name="DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

&dataawsccfisexperimenttemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs {

}
```


### DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration <a name="DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

&dataawsccfisexperimenttemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration {

}
```


### DataAwsccFisExperimentTemplateLogConfiguration <a name="DataAwsccFisExperimentTemplateLogConfiguration" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

&dataawsccfisexperimenttemplate.DataAwsccFisExperimentTemplateLogConfiguration {

}
```


### DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration <a name="DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

&dataawsccfisexperimenttemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration {

}
```


### DataAwsccFisExperimentTemplateLogConfigurationS3Configuration <a name="DataAwsccFisExperimentTemplateLogConfigurationS3Configuration" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3Configuration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

&dataawsccfisexperimenttemplate.DataAwsccFisExperimentTemplateLogConfigurationS3Configuration {

}
```


### DataAwsccFisExperimentTemplateStopConditions <a name="DataAwsccFisExperimentTemplateStopConditions" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

&dataawsccfisexperimenttemplate.DataAwsccFisExperimentTemplateStopConditions {

}
```


### DataAwsccFisExperimentTemplateTargets <a name="DataAwsccFisExperimentTemplateTargets" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

&dataawsccfisexperimenttemplate.DataAwsccFisExperimentTemplateTargets {

}
```


### DataAwsccFisExperimentTemplateTargetsFilters <a name="DataAwsccFisExperimentTemplateTargetsFilters" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

&dataawsccfisexperimenttemplate.DataAwsccFisExperimentTemplateTargetsFilters {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccFisExperimentTemplateActionsMap <a name="DataAwsccFisExperimentTemplateActionsMap" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

dataawsccfisexperimenttemplate.NewDataAwsccFisExperimentTemplateActionsMap(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccFisExperimentTemplateActionsMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.get"></a>

```go
func Get(key *string) DataAwsccFisExperimentTemplateActionsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccFisExperimentTemplateActionsOutputReference <a name="DataAwsccFisExperimentTemplateActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

dataawsccfisexperimenttemplate.NewDataAwsccFisExperimentTemplateActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) DataAwsccFisExperimentTemplateActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.actionId">ActionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.parameters">Parameters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.startAfter">StartAfter</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.targets">Targets</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActions">DataAwsccFisExperimentTemplateActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.actionId"></a>

```go
func ActionId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.parameters"></a>

```go
func Parameters() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `StartAfter`<sup>Required</sup> <a name="StartAfter" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.startAfter"></a>

```go
func StartAfter() *[]*string
```

- *Type:* *[]*string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.targets"></a>

```go
func Targets() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccFisExperimentTemplateActions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateActions">DataAwsccFisExperimentTemplateActions</a>

---


### DataAwsccFisExperimentTemplateExperimentOptionsOutputReference <a name="DataAwsccFisExperimentTemplateExperimentOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

dataawsccfisexperimenttemplate.NewDataAwsccFisExperimentTemplateExperimentOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccFisExperimentTemplateExperimentOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.property.accountTargeting">AccountTargeting</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.property.emptyTargetResolutionMode">EmptyTargetResolutionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptions">DataAwsccFisExperimentTemplateExperimentOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountTargeting`<sup>Required</sup> <a name="AccountTargeting" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.property.accountTargeting"></a>

```go
func AccountTargeting() *string
```

- *Type:* *string

---

##### `EmptyTargetResolutionMode`<sup>Required</sup> <a name="EmptyTargetResolutionMode" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.property.emptyTargetResolutionMode"></a>

```go
func EmptyTargetResolutionMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccFisExperimentTemplateExperimentOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentOptions">DataAwsccFisExperimentTemplateExperimentOptions</a>

---


### DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList <a name="DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

dataawsccfisexperimenttemplate.NewDataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.get"></a>

```go
func Get(index *f64) DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference <a name="DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

dataawsccfisexperimenttemplate.NewDataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.dashboardIdentifier">DashboardIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DashboardIdentifier`<sup>Required</sup> <a name="DashboardIdentifier" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.dashboardIdentifier"></a>

```go
func DashboardIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>

---


### DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference <a name="DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

dataawsccfisexperimenttemplate.NewDataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.cloudwatchDashboards">CloudwatchDashboards</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList">DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources">DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchDashboards`<sup>Required</sup> <a name="CloudwatchDashboards" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.cloudwatchDashboards"></a>

```go
func CloudwatchDashboards() DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList">DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources">DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSources</a>

---


### DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference <a name="DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

dataawsccfisexperimenttemplate.NewDataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.dataSources">DataSources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference">DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.outputs">Outputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference">DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.postExperimentDuration">PostExperimentDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.preExperimentDuration">PreExperimentDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfiguration">DataAwsccFisExperimentTemplateExperimentReportConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSources`<sup>Required</sup> <a name="DataSources" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.dataSources"></a>

```go
func DataSources() DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference">DataAwsccFisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference</a>

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.outputs"></a>

```go
func Outputs() DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference">DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference</a>

---

##### `PostExperimentDuration`<sup>Required</sup> <a name="PostExperimentDuration" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.postExperimentDuration"></a>

```go
func PostExperimentDuration() *string
```

- *Type:* *string

---

##### `PreExperimentDuration`<sup>Required</sup> <a name="PreExperimentDuration" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.preExperimentDuration"></a>

```go
func PreExperimentDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccFisExperimentTemplateExperimentReportConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfiguration">DataAwsccFisExperimentTemplateExperimentReportConfiguration</a>

---


### DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference <a name="DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

dataawsccfisexperimenttemplate.NewDataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a>

---


### DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference <a name="DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

dataawsccfisexperimenttemplate.NewDataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.experimentReportS3Configuration">ExperimentReportS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference">DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs">DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExperimentReportS3Configuration`<sup>Required</sup> <a name="ExperimentReportS3Configuration" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.experimentReportS3Configuration"></a>

```go
func ExperimentReportS3Configuration() DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference">DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs">DataAwsccFisExperimentTemplateExperimentReportConfigurationOutputs</a>

---


### DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference <a name="DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

dataawsccfisexperimenttemplate.NewDataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.logGroupArn"></a>

```go
func LogGroupArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a>

---


### DataAwsccFisExperimentTemplateLogConfigurationOutputReference <a name="DataAwsccFisExperimentTemplateLogConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

dataawsccfisexperimenttemplate.NewDataAwsccFisExperimentTemplateLogConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccFisExperimentTemplateLogConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.property.cloudwatchLogsConfiguration">CloudwatchLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference">DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.property.logSchemaVersion">LogSchemaVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference">DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfiguration">DataAwsccFisExperimentTemplateLogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogsConfiguration`<sup>Required</sup> <a name="CloudwatchLogsConfiguration" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.property.cloudwatchLogsConfiguration"></a>

```go
func CloudwatchLogsConfiguration() DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference">DataAwsccFisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference</a>

---

##### `LogSchemaVersion`<sup>Required</sup> <a name="LogSchemaVersion" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.property.logSchemaVersion"></a>

```go
func LogSchemaVersion() *f64
```

- *Type:* *f64

---

##### `S3Configuration`<sup>Required</sup> <a name="S3Configuration" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.property.s3Configuration"></a>

```go
func S3Configuration() DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference">DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccFisExperimentTemplateLogConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfiguration">DataAwsccFisExperimentTemplateLogConfiguration</a>

---


### DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference <a name="DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

dataawsccfisexperimenttemplate.NewDataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3Configuration">DataAwsccFisExperimentTemplateLogConfigurationS3Configuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccFisExperimentTemplateLogConfigurationS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateLogConfigurationS3Configuration">DataAwsccFisExperimentTemplateLogConfigurationS3Configuration</a>

---


### DataAwsccFisExperimentTemplateStopConditionsList <a name="DataAwsccFisExperimentTemplateStopConditionsList" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

dataawsccfisexperimenttemplate.NewDataAwsccFisExperimentTemplateStopConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccFisExperimentTemplateStopConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.get"></a>

```go
func Get(index *f64) DataAwsccFisExperimentTemplateStopConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccFisExperimentTemplateStopConditionsOutputReference <a name="DataAwsccFisExperimentTemplateStopConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

dataawsccfisexperimenttemplate.NewDataAwsccFisExperimentTemplateStopConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccFisExperimentTemplateStopConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditions">DataAwsccFisExperimentTemplateStopConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccFisExperimentTemplateStopConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateStopConditions">DataAwsccFisExperimentTemplateStopConditions</a>

---


### DataAwsccFisExperimentTemplateTargetsFiltersList <a name="DataAwsccFisExperimentTemplateTargetsFiltersList" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

dataawsccfisexperimenttemplate.NewDataAwsccFisExperimentTemplateTargetsFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccFisExperimentTemplateTargetsFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.get"></a>

```go
func Get(index *f64) DataAwsccFisExperimentTemplateTargetsFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccFisExperimentTemplateTargetsFiltersOutputReference <a name="DataAwsccFisExperimentTemplateTargetsFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

dataawsccfisexperimenttemplate.NewDataAwsccFisExperimentTemplateTargetsFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccFisExperimentTemplateTargetsFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFilters">DataAwsccFisExperimentTemplateTargetsFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccFisExperimentTemplateTargetsFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFilters">DataAwsccFisExperimentTemplateTargetsFilters</a>

---


### DataAwsccFisExperimentTemplateTargetsMap <a name="DataAwsccFisExperimentTemplateTargetsMap" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

dataawsccfisexperimenttemplate.NewDataAwsccFisExperimentTemplateTargetsMap(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccFisExperimentTemplateTargetsMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.get"></a>

```go
func Get(key *string) DataAwsccFisExperimentTemplateTargetsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccFisExperimentTemplateTargetsOutputReference <a name="DataAwsccFisExperimentTemplateTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfisexperimenttemplate"

dataawsccfisexperimenttemplate.NewDataAwsccFisExperimentTemplateTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) DataAwsccFisExperimentTemplateTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList">DataAwsccFisExperimentTemplateTargetsFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.parameters">Parameters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.resourceArns">ResourceArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.resourceTags">ResourceTags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.selectionMode">SelectionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargets">DataAwsccFisExperimentTemplateTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.filters"></a>

```go
func Filters() DataAwsccFisExperimentTemplateTargetsFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsFiltersList">DataAwsccFisExperimentTemplateTargetsFiltersList</a>

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.parameters"></a>

```go
func Parameters() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `ResourceArns`<sup>Required</sup> <a name="ResourceArns" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.resourceArns"></a>

```go
func ResourceArns() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.resourceTags"></a>

```go
func ResourceTags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `SelectionMode`<sup>Required</sup> <a name="SelectionMode" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.selectionMode"></a>

```go
func SelectionMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccFisExperimentTemplateTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFisExperimentTemplate.DataAwsccFisExperimentTemplateTargets">DataAwsccFisExperimentTemplateTargets</a>

---



