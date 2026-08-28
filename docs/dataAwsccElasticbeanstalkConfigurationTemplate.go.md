# `dataAwsccElasticbeanstalkConfigurationTemplate` Submodule <a name="`dataAwsccElasticbeanstalkConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticbeanstalkConfigurationTemplate <a name="DataAwsccElasticbeanstalkConfigurationTemplate" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticbeanstalk_configuration_template awscc_elasticbeanstalk_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkconfigurationtemplate"

dataawsccelasticbeanstalkconfigurationtemplate.NewDataAwsccElasticbeanstalkConfigurationTemplate(scope Construct, id *string, config DataAwsccElasticbeanstalkConfigurationTemplateConfig) DataAwsccElasticbeanstalkConfigurationTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig">DataAwsccElasticbeanstalkConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig">DataAwsccElasticbeanstalkConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccElasticbeanstalkConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkconfigurationtemplate"

dataawsccelasticbeanstalkconfigurationtemplate.DataAwsccElasticbeanstalkConfigurationTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkconfigurationtemplate"

dataawsccelasticbeanstalkconfigurationtemplate.DataAwsccElasticbeanstalkConfigurationTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkconfigurationtemplate"

dataawsccelasticbeanstalkconfigurationtemplate.DataAwsccElasticbeanstalkConfigurationTemplate_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkconfigurationtemplate"

dataawsccelasticbeanstalkconfigurationtemplate.DataAwsccElasticbeanstalkConfigurationTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccElasticbeanstalkConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccElasticbeanstalkConfigurationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccElasticbeanstalkConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticbeanstalk_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticbeanstalkConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.environmentId">EnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.optionSettings">OptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList">DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.platformArn">PlatformArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.solutionStackName">SolutionStackName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.sourceConfiguration">SourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference">DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.templateName">TemplateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.environmentId"></a>

```go
func EnvironmentId() *string
```

- *Type:* *string

---

##### `OptionSettings`<sup>Required</sup> <a name="OptionSettings" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.optionSettings"></a>

```go
func OptionSettings() DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList">DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList</a>

---

##### `PlatformArn`<sup>Required</sup> <a name="PlatformArn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.platformArn"></a>

```go
func PlatformArn() *string
```

- *Type:* *string

---

##### `SolutionStackName`<sup>Required</sup> <a name="SolutionStackName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.solutionStackName"></a>

```go
func SolutionStackName() *string
```

- *Type:* *string

---

##### `SourceConfiguration`<sup>Required</sup> <a name="SourceConfiguration" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.sourceConfiguration"></a>

```go
func SourceConfiguration() DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference">DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference</a>

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.templateName"></a>

```go
func TemplateName() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticbeanstalkConfigurationTemplateConfig <a name="DataAwsccElasticbeanstalkConfigurationTemplateConfig" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkconfigurationtemplate"

&dataawsccelasticbeanstalkconfigurationtemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticbeanstalk_configuration_template#id DataAwsccElasticbeanstalkConfigurationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings <a name="DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkconfigurationtemplate"

&dataawsccelasticbeanstalkconfigurationtemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings {

}
```


### DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration <a name="DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkconfigurationtemplate"

&dataawsccelasticbeanstalkconfigurationtemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList <a name="DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkconfigurationtemplate"

dataawsccelasticbeanstalkconfigurationtemplate.NewDataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.get"></a>

```go
func Get(index *f64) DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference <a name="DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkconfigurationtemplate"

dataawsccelasticbeanstalkconfigurationtemplate.NewDataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionName">OptionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings">DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OptionName`<sup>Required</sup> <a name="OptionName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionName"></a>

```go
func OptionName() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings">DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings</a>

---


### DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference <a name="DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkconfigurationtemplate"

dataawsccelasticbeanstalkconfigurationtemplate.NewDataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateName">TemplateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration">DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateName"></a>

```go
func TemplateName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration">DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration</a>

---



