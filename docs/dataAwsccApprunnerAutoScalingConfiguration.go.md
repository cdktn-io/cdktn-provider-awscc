# `dataAwsccApprunnerAutoScalingConfiguration` Submodule <a name="`dataAwsccApprunnerAutoScalingConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApprunnerAutoScalingConfiguration <a name="DataAwsccApprunnerAutoScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apprunner_auto_scaling_configuration awscc_apprunner_auto_scaling_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapprunnerautoscalingconfiguration"

dataawsccapprunnerautoscalingconfiguration.NewDataAwsccApprunnerAutoScalingConfiguration(scope Construct, id *string, config DataAwsccApprunnerAutoScalingConfigurationConfig) DataAwsccApprunnerAutoScalingConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig">DataAwsccApprunnerAutoScalingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig">DataAwsccApprunnerAutoScalingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApprunnerAutoScalingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapprunnerautoscalingconfiguration"

dataawsccapprunnerautoscalingconfiguration.DataAwsccApprunnerAutoScalingConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapprunnerautoscalingconfiguration"

dataawsccapprunnerautoscalingconfiguration.DataAwsccApprunnerAutoScalingConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapprunnerautoscalingconfiguration"

dataawsccapprunnerautoscalingconfiguration.DataAwsccApprunnerAutoScalingConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapprunnerautoscalingconfiguration"

dataawsccapprunnerautoscalingconfiguration.DataAwsccApprunnerAutoScalingConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccApprunnerAutoScalingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccApprunnerAutoScalingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccApprunnerAutoScalingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apprunner_auto_scaling_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApprunnerAutoScalingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.autoScalingConfigurationArn">AutoScalingConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.autoScalingConfigurationName">AutoScalingConfigurationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.autoScalingConfigurationRevision">AutoScalingConfigurationRevision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.latest">Latest</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.maxConcurrency">MaxConcurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.maxSize">MaxSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.minSize">MinSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList">DataAwsccApprunnerAutoScalingConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AutoScalingConfigurationArn`<sup>Required</sup> <a name="AutoScalingConfigurationArn" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.autoScalingConfigurationArn"></a>

```go
func AutoScalingConfigurationArn() *string
```

- *Type:* *string

---

##### `AutoScalingConfigurationName`<sup>Required</sup> <a name="AutoScalingConfigurationName" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.autoScalingConfigurationName"></a>

```go
func AutoScalingConfigurationName() *string
```

- *Type:* *string

---

##### `AutoScalingConfigurationRevision`<sup>Required</sup> <a name="AutoScalingConfigurationRevision" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.autoScalingConfigurationRevision"></a>

```go
func AutoScalingConfigurationRevision() *f64
```

- *Type:* *f64

---

##### `Latest`<sup>Required</sup> <a name="Latest" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.latest"></a>

```go
func Latest() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MaxConcurrency`<sup>Required</sup> <a name="MaxConcurrency" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.maxConcurrency"></a>

```go
func MaxConcurrency() *f64
```

- *Type:* *f64

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.maxSize"></a>

```go
func MaxSize() *f64
```

- *Type:* *f64

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.minSize"></a>

```go
func MinSize() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.tags"></a>

```go
func Tags() DataAwsccApprunnerAutoScalingConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList">DataAwsccApprunnerAutoScalingConfigurationTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApprunnerAutoScalingConfigurationConfig <a name="DataAwsccApprunnerAutoScalingConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapprunnerautoscalingconfiguration"

&dataawsccapprunnerautoscalingconfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apprunner_auto_scaling_configuration#id DataAwsccApprunnerAutoScalingConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApprunnerAutoScalingConfigurationTags <a name="DataAwsccApprunnerAutoScalingConfigurationTags" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapprunnerautoscalingconfiguration"

&dataawsccapprunnerautoscalingconfiguration.DataAwsccApprunnerAutoScalingConfigurationTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApprunnerAutoScalingConfigurationTagsList <a name="DataAwsccApprunnerAutoScalingConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapprunnerautoscalingconfiguration"

dataawsccapprunnerautoscalingconfiguration.NewDataAwsccApprunnerAutoScalingConfigurationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccApprunnerAutoScalingConfigurationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.get"></a>

```go
func Get(index *f64) DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference <a name="DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapprunnerautoscalingconfiguration"

dataawsccapprunnerautoscalingconfiguration.NewDataAwsccApprunnerAutoScalingConfigurationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTags">DataAwsccApprunnerAutoScalingConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApprunnerAutoScalingConfigurationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApprunnerAutoScalingConfiguration.DataAwsccApprunnerAutoScalingConfigurationTags">DataAwsccApprunnerAutoScalingConfigurationTags</a>

---



