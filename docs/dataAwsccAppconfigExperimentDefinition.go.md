# `dataAwsccAppconfigExperimentDefinition` Submodule <a name="`dataAwsccAppconfigExperimentDefinition` Submodule" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppconfigExperimentDefinition <a name="DataAwsccAppconfigExperimentDefinition" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appconfig_experiment_definition awscc_appconfig_experiment_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigexperimentdefinition"

dataawsccappconfigexperimentdefinition.NewDataAwsccAppconfigExperimentDefinition(scope Construct, id *string, config DataAwsccAppconfigExperimentDefinitionConfig) DataAwsccAppconfigExperimentDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig">DataAwsccAppconfigExperimentDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig">DataAwsccAppconfigExperimentDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAppconfigExperimentDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigexperimentdefinition"

dataawsccappconfigexperimentdefinition.DataAwsccAppconfigExperimentDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigexperimentdefinition"

dataawsccappconfigexperimentdefinition.DataAwsccAppconfigExperimentDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigexperimentdefinition"

dataawsccappconfigexperimentdefinition.DataAwsccAppconfigExperimentDefinition_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigexperimentdefinition"

dataawsccappconfigexperimentdefinition.DataAwsccAppconfigExperimentDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccAppconfigExperimentDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccAppconfigExperimentDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccAppconfigExperimentDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appconfig_experiment_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppconfigExperimentDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.applicationIdentifier">ApplicationIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.audienceDescription">AudienceDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.audienceRule">AudienceRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.configurationProfileIdentifier">ConfigurationProfileIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.control">Control</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference">DataAwsccAppconfigExperimentDefinitionControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.environmentIdentifier">EnvironmentIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.experimentDefinitionId">ExperimentDefinitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.flagKey">FlagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.hypothesis">Hypothesis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.launchCriteria">LaunchCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList">DataAwsccAppconfigExperimentDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.treatments">Treatments</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList">DataAwsccAppconfigExperimentDefinitionTreatmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `ApplicationIdentifier`<sup>Required</sup> <a name="ApplicationIdentifier" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.applicationIdentifier"></a>

```go
func ApplicationIdentifier() *string
```

- *Type:* *string

---

##### `AudienceDescription`<sup>Required</sup> <a name="AudienceDescription" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.audienceDescription"></a>

```go
func AudienceDescription() *string
```

- *Type:* *string

---

##### `AudienceRule`<sup>Required</sup> <a name="AudienceRule" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.audienceRule"></a>

```go
func AudienceRule() *string
```

- *Type:* *string

---

##### `ConfigurationProfileIdentifier`<sup>Required</sup> <a name="ConfigurationProfileIdentifier" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.configurationProfileIdentifier"></a>

```go
func ConfigurationProfileIdentifier() *string
```

- *Type:* *string

---

##### `Control`<sup>Required</sup> <a name="Control" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.control"></a>

```go
func Control() DataAwsccAppconfigExperimentDefinitionControlOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference">DataAwsccAppconfigExperimentDefinitionControlOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `EnvironmentIdentifier`<sup>Required</sup> <a name="EnvironmentIdentifier" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.environmentIdentifier"></a>

```go
func EnvironmentIdentifier() *string
```

- *Type:* *string

---

##### `ExperimentDefinitionId`<sup>Required</sup> <a name="ExperimentDefinitionId" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.experimentDefinitionId"></a>

```go
func ExperimentDefinitionId() *string
```

- *Type:* *string

---

##### `FlagKey`<sup>Required</sup> <a name="FlagKey" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.flagKey"></a>

```go
func FlagKey() *string
```

- *Type:* *string

---

##### `Hypothesis`<sup>Required</sup> <a name="Hypothesis" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.hypothesis"></a>

```go
func Hypothesis() *string
```

- *Type:* *string

---

##### `LaunchCriteria`<sup>Required</sup> <a name="LaunchCriteria" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.launchCriteria"></a>

```go
func LaunchCriteria() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.tags"></a>

```go
func Tags() DataAwsccAppconfigExperimentDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList">DataAwsccAppconfigExperimentDefinitionTagsList</a>

---

##### `Treatments`<sup>Required</sup> <a name="Treatments" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.treatments"></a>

```go
func Treatments() DataAwsccAppconfigExperimentDefinitionTreatmentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList">DataAwsccAppconfigExperimentDefinitionTreatmentsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppconfigExperimentDefinitionConfig <a name="DataAwsccAppconfigExperimentDefinitionConfig" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigexperimentdefinition"

&dataawsccappconfigexperimentdefinition.DataAwsccAppconfigExperimentDefinitionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appconfig_experiment_definition#id DataAwsccAppconfigExperimentDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppconfigExperimentDefinitionControl <a name="DataAwsccAppconfigExperimentDefinitionControl" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControl.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigexperimentdefinition"

&dataawsccappconfigexperimentdefinition.DataAwsccAppconfigExperimentDefinitionControl {

}
```


### DataAwsccAppconfigExperimentDefinitionControlAttributeValues <a name="DataAwsccAppconfigExperimentDefinitionControlAttributeValues" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigexperimentdefinition"

&dataawsccappconfigexperimentdefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValues {

}
```


### DataAwsccAppconfigExperimentDefinitionTags <a name="DataAwsccAppconfigExperimentDefinitionTags" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigexperimentdefinition"

&dataawsccappconfigexperimentdefinition.DataAwsccAppconfigExperimentDefinitionTags {

}
```


### DataAwsccAppconfigExperimentDefinitionTreatments <a name="DataAwsccAppconfigExperimentDefinitionTreatments" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatments.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigexperimentdefinition"

&dataawsccappconfigexperimentdefinition.DataAwsccAppconfigExperimentDefinitionTreatments {

}
```


### DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues <a name="DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigexperimentdefinition"

&dataawsccappconfigexperimentdefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap <a name="DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigexperimentdefinition"

dataawsccappconfigexperimentdefinition.NewDataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.get"></a>

```go
func Get(key *string) DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference <a name="DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigexperimentdefinition"

dataawsccappconfigexperimentdefinition.NewDataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValue">BooleanValue</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArray">NumberArray</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValue">NumberValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArray">StringArray</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValues">DataAwsccAppconfigExperimentDefinitionControlAttributeValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BooleanValue`<sup>Required</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValue"></a>

```go
func BooleanValue() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `NumberArray`<sup>Required</sup> <a name="NumberArray" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArray"></a>

```go
func NumberArray() *[]*f64
```

- *Type:* *[]*f64

---

##### `NumberValue`<sup>Required</sup> <a name="NumberValue" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValue"></a>

```go
func NumberValue() *f64
```

- *Type:* *f64

---

##### `StringArray`<sup>Required</sup> <a name="StringArray" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArray"></a>

```go
func StringArray() *[]*string
```

- *Type:* *[]*string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppconfigExperimentDefinitionControlAttributeValues
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValues">DataAwsccAppconfigExperimentDefinitionControlAttributeValues</a>

---


### DataAwsccAppconfigExperimentDefinitionControlOutputReference <a name="DataAwsccAppconfigExperimentDefinitionControlOutputReference" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigexperimentdefinition"

dataawsccappconfigexperimentdefinition.NewDataAwsccAppconfigExperimentDefinitionControlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppconfigExperimentDefinitionControlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.attributeValues">AttributeValues</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap">DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControl">DataAwsccAppconfigExperimentDefinitionControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeValues`<sup>Required</sup> <a name="AttributeValues" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.attributeValues"></a>

```go
func AttributeValues() DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap">DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppconfigExperimentDefinitionControl
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControl">DataAwsccAppconfigExperimentDefinitionControl</a>

---


### DataAwsccAppconfigExperimentDefinitionTagsList <a name="DataAwsccAppconfigExperimentDefinitionTagsList" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigexperimentdefinition"

dataawsccappconfigexperimentdefinition.NewDataAwsccAppconfigExperimentDefinitionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAppconfigExperimentDefinitionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.get"></a>

```go
func Get(index *f64) DataAwsccAppconfigExperimentDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAppconfigExperimentDefinitionTagsOutputReference <a name="DataAwsccAppconfigExperimentDefinitionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigexperimentdefinition"

dataawsccappconfigexperimentdefinition.NewDataAwsccAppconfigExperimentDefinitionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAppconfigExperimentDefinitionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTags">DataAwsccAppconfigExperimentDefinitionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppconfigExperimentDefinitionTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTags">DataAwsccAppconfigExperimentDefinitionTags</a>

---


### DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap <a name="DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigexperimentdefinition"

dataawsccappconfigexperimentdefinition.NewDataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.get"></a>

```go
func Get(key *string) DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference <a name="DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigexperimentdefinition"

dataawsccappconfigexperimentdefinition.NewDataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValue">BooleanValue</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArray">NumberArray</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValue">NumberValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArray">StringArray</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues">DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BooleanValue`<sup>Required</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValue"></a>

```go
func BooleanValue() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `NumberArray`<sup>Required</sup> <a name="NumberArray" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArray"></a>

```go
func NumberArray() *[]*f64
```

- *Type:* *[]*f64

---

##### `NumberValue`<sup>Required</sup> <a name="NumberValue" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValue"></a>

```go
func NumberValue() *f64
```

- *Type:* *f64

---

##### `StringArray`<sup>Required</sup> <a name="StringArray" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArray"></a>

```go
func StringArray() *[]*string
```

- *Type:* *[]*string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues">DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues</a>

---


### DataAwsccAppconfigExperimentDefinitionTreatmentsList <a name="DataAwsccAppconfigExperimentDefinitionTreatmentsList" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigexperimentdefinition"

dataawsccappconfigexperimentdefinition.NewDataAwsccAppconfigExperimentDefinitionTreatmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAppconfigExperimentDefinitionTreatmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.get"></a>

```go
func Get(index *f64) DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference <a name="DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigexperimentdefinition"

dataawsccappconfigexperimentdefinition.NewDataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValues">AttributeValues</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap">DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatments">DataAwsccAppconfigExperimentDefinitionTreatments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeValues`<sup>Required</sup> <a name="AttributeValues" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValues"></a>

```go
func AttributeValues() DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap">DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppconfigExperimentDefinitionTreatments
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatments">DataAwsccAppconfigExperimentDefinitionTreatments</a>

---



