# `dataAwsccDrsLaunchConfigurationTemplate` Submodule <a name="`dataAwsccDrsLaunchConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDrsLaunchConfigurationTemplate <a name="DataAwsccDrsLaunchConfigurationTemplate" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_launch_configuration_template awscc_drs_launch_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdrslaunchconfigurationtemplate"

dataawsccdrslaunchconfigurationtemplate.NewDataAwsccDrsLaunchConfigurationTemplate(scope Construct, id *string, config DataAwsccDrsLaunchConfigurationTemplateConfig) DataAwsccDrsLaunchConfigurationTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig">DataAwsccDrsLaunchConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig">DataAwsccDrsLaunchConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDrsLaunchConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdrslaunchconfigurationtemplate"

dataawsccdrslaunchconfigurationtemplate.DataAwsccDrsLaunchConfigurationTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdrslaunchconfigurationtemplate"

dataawsccdrslaunchconfigurationtemplate.DataAwsccDrsLaunchConfigurationTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdrslaunchconfigurationtemplate"

dataawsccdrslaunchconfigurationtemplate.DataAwsccDrsLaunchConfigurationTemplate_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdrslaunchconfigurationtemplate"

dataawsccdrslaunchconfigurationtemplate.DataAwsccDrsLaunchConfigurationTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccDrsLaunchConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccDrsLaunchConfigurationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccDrsLaunchConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_launch_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDrsLaunchConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.copyPrivateIp">CopyPrivateIp</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.copyTags">CopyTags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.exportBucketArn">ExportBucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.launchConfigurationTemplateId">LaunchConfigurationTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.launchDisposition">LaunchDisposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.launchIntoSourceInstance">LaunchIntoSourceInstance</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.licensing">Licensing</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference">DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.postLaunchEnabled">PostLaunchEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList">DataAwsccDrsLaunchConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethod">TargetInstanceTypeRightSizingMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CopyPrivateIp`<sup>Required</sup> <a name="CopyPrivateIp" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.copyPrivateIp"></a>

```go
func CopyPrivateIp() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CopyTags`<sup>Required</sup> <a name="CopyTags" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.copyTags"></a>

```go
func CopyTags() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ExportBucketArn`<sup>Required</sup> <a name="ExportBucketArn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.exportBucketArn"></a>

```go
func ExportBucketArn() *string
```

- *Type:* *string

---

##### `LaunchConfigurationTemplateId`<sup>Required</sup> <a name="LaunchConfigurationTemplateId" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.launchConfigurationTemplateId"></a>

```go
func LaunchConfigurationTemplateId() *string
```

- *Type:* *string

---

##### `LaunchDisposition`<sup>Required</sup> <a name="LaunchDisposition" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.launchDisposition"></a>

```go
func LaunchDisposition() *string
```

- *Type:* *string

---

##### `LaunchIntoSourceInstance`<sup>Required</sup> <a name="LaunchIntoSourceInstance" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.launchIntoSourceInstance"></a>

```go
func LaunchIntoSourceInstance() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Licensing`<sup>Required</sup> <a name="Licensing" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.licensing"></a>

```go
func Licensing() DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference">DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference</a>

---

##### `PostLaunchEnabled`<sup>Required</sup> <a name="PostLaunchEnabled" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.postLaunchEnabled"></a>

```go
func PostLaunchEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.tags"></a>

```go
func Tags() DataAwsccDrsLaunchConfigurationTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList">DataAwsccDrsLaunchConfigurationTemplateTagsList</a>

---

##### `TargetInstanceTypeRightSizingMethod`<sup>Required</sup> <a name="TargetInstanceTypeRightSizingMethod" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethod"></a>

```go
func TargetInstanceTypeRightSizingMethod() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDrsLaunchConfigurationTemplateConfig <a name="DataAwsccDrsLaunchConfigurationTemplateConfig" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdrslaunchconfigurationtemplate"

&dataawsccdrslaunchconfigurationtemplate.DataAwsccDrsLaunchConfigurationTemplateConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_launch_configuration_template#id DataAwsccDrsLaunchConfigurationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDrsLaunchConfigurationTemplateLicensing <a name="DataAwsccDrsLaunchConfigurationTemplateLicensing" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensing.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdrslaunchconfigurationtemplate"

&dataawsccdrslaunchconfigurationtemplate.DataAwsccDrsLaunchConfigurationTemplateLicensing {

}
```


### DataAwsccDrsLaunchConfigurationTemplateTags <a name="DataAwsccDrsLaunchConfigurationTemplateTags" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdrslaunchconfigurationtemplate"

&dataawsccdrslaunchconfigurationtemplate.DataAwsccDrsLaunchConfigurationTemplateTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference <a name="DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdrslaunchconfigurationtemplate"

dataawsccdrslaunchconfigurationtemplate.NewDataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.osByol">OsByol</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensing">DataAwsccDrsLaunchConfigurationTemplateLicensing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OsByol`<sup>Required</sup> <a name="OsByol" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.osByol"></a>

```go
func OsByol() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDrsLaunchConfigurationTemplateLicensing
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensing">DataAwsccDrsLaunchConfigurationTemplateLicensing</a>

---


### DataAwsccDrsLaunchConfigurationTemplateTagsList <a name="DataAwsccDrsLaunchConfigurationTemplateTagsList" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdrslaunchconfigurationtemplate"

dataawsccdrslaunchconfigurationtemplate.NewDataAwsccDrsLaunchConfigurationTemplateTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDrsLaunchConfigurationTemplateTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.get"></a>

```go
func Get(index *f64) DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference <a name="DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdrslaunchconfigurationtemplate"

dataawsccdrslaunchconfigurationtemplate.NewDataAwsccDrsLaunchConfigurationTemplateTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTags">DataAwsccDrsLaunchConfigurationTemplateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDrsLaunchConfigurationTemplateTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTags">DataAwsccDrsLaunchConfigurationTemplateTags</a>

---



