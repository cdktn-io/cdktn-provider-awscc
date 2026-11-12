# `dataAwsccMgnReplicationConfigurationTemplate` Submodule <a name="`dataAwsccMgnReplicationConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMgnReplicationConfigurationTemplate <a name="DataAwsccMgnReplicationConfigurationTemplate" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mgn_replication_configuration_template awscc_mgn_replication_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmgnreplicationconfigurationtemplate"

dataawsccmgnreplicationconfigurationtemplate.NewDataAwsccMgnReplicationConfigurationTemplate(scope Construct, id *string, config DataAwsccMgnReplicationConfigurationTemplateConfig) DataAwsccMgnReplicationConfigurationTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig">DataAwsccMgnReplicationConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig">DataAwsccMgnReplicationConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMgnReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmgnreplicationconfigurationtemplate"

dataawsccmgnreplicationconfigurationtemplate.DataAwsccMgnReplicationConfigurationTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmgnreplicationconfigurationtemplate"

dataawsccmgnreplicationconfigurationtemplate.DataAwsccMgnReplicationConfigurationTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmgnreplicationconfigurationtemplate"

dataawsccmgnreplicationconfigurationtemplate.DataAwsccMgnReplicationConfigurationTemplate_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmgnreplicationconfigurationtemplate"

dataawsccmgnreplicationconfigurationtemplate.DataAwsccMgnReplicationConfigurationTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccMgnReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccMgnReplicationConfigurationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccMgnReplicationConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mgn_replication_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMgnReplicationConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.associateDefaultSecurityGroup">AssociateDefaultSecurityGroup</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.bandwidthThrottling">BandwidthThrottling</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.createPublicIp">CreatePublicIp</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.dataPlaneRouting">DataPlaneRouting</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.defaultLargeStagingDiskType">DefaultLargeStagingDiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.ebsEncryption">EbsEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.ebsEncryptionKeyArn">EbsEncryptionKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.internetProtocol">InternetProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.replicationConfigurationTemplateId">ReplicationConfigurationTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.replicationServerInstanceType">ReplicationServerInstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs">ReplicationServersSecurityGroupsIDs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.stagingAreaSubnetId">StagingAreaSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.stagingAreaTags">StagingAreaTags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.storeSnapshotOnLocalZone">StoreSnapshotOnLocalZone</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList">DataAwsccMgnReplicationConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.useDedicatedReplicationServer">UseDedicatedReplicationServer</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.useFipsEndpoint">UseFipsEndpoint</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AssociateDefaultSecurityGroup`<sup>Required</sup> <a name="AssociateDefaultSecurityGroup" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.associateDefaultSecurityGroup"></a>

```go
func AssociateDefaultSecurityGroup() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `BandwidthThrottling`<sup>Required</sup> <a name="BandwidthThrottling" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.bandwidthThrottling"></a>

```go
func BandwidthThrottling() *f64
```

- *Type:* *f64

---

##### `CreatePublicIp`<sup>Required</sup> <a name="CreatePublicIp" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.createPublicIp"></a>

```go
func CreatePublicIp() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DataPlaneRouting`<sup>Required</sup> <a name="DataPlaneRouting" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.dataPlaneRouting"></a>

```go
func DataPlaneRouting() *string
```

- *Type:* *string

---

##### `DefaultLargeStagingDiskType`<sup>Required</sup> <a name="DefaultLargeStagingDiskType" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.defaultLargeStagingDiskType"></a>

```go
func DefaultLargeStagingDiskType() *string
```

- *Type:* *string

---

##### `EbsEncryption`<sup>Required</sup> <a name="EbsEncryption" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.ebsEncryption"></a>

```go
func EbsEncryption() *string
```

- *Type:* *string

---

##### `EbsEncryptionKeyArn`<sup>Required</sup> <a name="EbsEncryptionKeyArn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.ebsEncryptionKeyArn"></a>

```go
func EbsEncryptionKeyArn() *string
```

- *Type:* *string

---

##### `InternetProtocol`<sup>Required</sup> <a name="InternetProtocol" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.internetProtocol"></a>

```go
func InternetProtocol() *string
```

- *Type:* *string

---

##### `ReplicationConfigurationTemplateId`<sup>Required</sup> <a name="ReplicationConfigurationTemplateId" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.replicationConfigurationTemplateId"></a>

```go
func ReplicationConfigurationTemplateId() *string
```

- *Type:* *string

---

##### `ReplicationServerInstanceType`<sup>Required</sup> <a name="ReplicationServerInstanceType" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.replicationServerInstanceType"></a>

```go
func ReplicationServerInstanceType() *string
```

- *Type:* *string

---

##### `ReplicationServersSecurityGroupsIDs`<sup>Required</sup> <a name="ReplicationServersSecurityGroupsIDs" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs"></a>

```go
func ReplicationServersSecurityGroupsIDs() *[]*string
```

- *Type:* *[]*string

---

##### `StagingAreaSubnetId`<sup>Required</sup> <a name="StagingAreaSubnetId" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.stagingAreaSubnetId"></a>

```go
func StagingAreaSubnetId() *string
```

- *Type:* *string

---

##### `StagingAreaTags`<sup>Required</sup> <a name="StagingAreaTags" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.stagingAreaTags"></a>

```go
func StagingAreaTags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `StoreSnapshotOnLocalZone`<sup>Required</sup> <a name="StoreSnapshotOnLocalZone" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.storeSnapshotOnLocalZone"></a>

```go
func StoreSnapshotOnLocalZone() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.tags"></a>

```go
func Tags() DataAwsccMgnReplicationConfigurationTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList">DataAwsccMgnReplicationConfigurationTemplateTagsList</a>

---

##### `UseDedicatedReplicationServer`<sup>Required</sup> <a name="UseDedicatedReplicationServer" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.useDedicatedReplicationServer"></a>

```go
func UseDedicatedReplicationServer() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UseFipsEndpoint`<sup>Required</sup> <a name="UseFipsEndpoint" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.useFipsEndpoint"></a>

```go
func UseFipsEndpoint() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMgnReplicationConfigurationTemplateConfig <a name="DataAwsccMgnReplicationConfigurationTemplateConfig" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmgnreplicationconfigurationtemplate"

&dataawsccmgnreplicationconfigurationtemplate.DataAwsccMgnReplicationConfigurationTemplateConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mgn_replication_configuration_template#id DataAwsccMgnReplicationConfigurationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMgnReplicationConfigurationTemplateTags <a name="DataAwsccMgnReplicationConfigurationTemplateTags" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmgnreplicationconfigurationtemplate"

&dataawsccmgnreplicationconfigurationtemplate.DataAwsccMgnReplicationConfigurationTemplateTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMgnReplicationConfigurationTemplateTagsList <a name="DataAwsccMgnReplicationConfigurationTemplateTagsList" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmgnreplicationconfigurationtemplate"

dataawsccmgnreplicationconfigurationtemplate.NewDataAwsccMgnReplicationConfigurationTemplateTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMgnReplicationConfigurationTemplateTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.get"></a>

```go
func Get(index *f64) DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference <a name="DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmgnreplicationconfigurationtemplate"

dataawsccmgnreplicationconfigurationtemplate.NewDataAwsccMgnReplicationConfigurationTemplateTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTags">DataAwsccMgnReplicationConfigurationTemplateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMgnReplicationConfigurationTemplateTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTags">DataAwsccMgnReplicationConfigurationTemplateTags</a>

---



