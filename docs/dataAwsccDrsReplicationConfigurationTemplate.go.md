# `dataAwsccDrsReplicationConfigurationTemplate` Submodule <a name="`dataAwsccDrsReplicationConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDrsReplicationConfigurationTemplate <a name="DataAwsccDrsReplicationConfigurationTemplate" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_replication_configuration_template awscc_drs_replication_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdrsreplicationconfigurationtemplate"

dataawsccdrsreplicationconfigurationtemplate.NewDataAwsccDrsReplicationConfigurationTemplate(scope Construct, id *string, config DataAwsccDrsReplicationConfigurationTemplateConfig) DataAwsccDrsReplicationConfigurationTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig">DataAwsccDrsReplicationConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig">DataAwsccDrsReplicationConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDrsReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdrsreplicationconfigurationtemplate"

dataawsccdrsreplicationconfigurationtemplate.DataAwsccDrsReplicationConfigurationTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdrsreplicationconfigurationtemplate"

dataawsccdrsreplicationconfigurationtemplate.DataAwsccDrsReplicationConfigurationTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdrsreplicationconfigurationtemplate"

dataawsccdrsreplicationconfigurationtemplate.DataAwsccDrsReplicationConfigurationTemplate_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdrsreplicationconfigurationtemplate"

dataawsccdrsreplicationconfigurationtemplate.DataAwsccDrsReplicationConfigurationTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccDrsReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccDrsReplicationConfigurationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccDrsReplicationConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_replication_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDrsReplicationConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroup">AssociateDefaultSecurityGroup</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.autoReplicateNewDisks">AutoReplicateNewDisks</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.bandwidthThrottling">BandwidthThrottling</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.createPublicIp">CreatePublicIp</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.dataPlaneRouting">DataPlaneRouting</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskType">DefaultLargeStagingDiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.ebsEncryption">EbsEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArn">EbsEncryptionKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.internetProtocol">InternetProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.pitPolicy">PitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList">DataAwsccDrsReplicationConfigurationTemplatePitPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.replicationConfigurationTemplateId">ReplicationConfigurationTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.replicationServerInstanceType">ReplicationServerInstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs">ReplicationServersSecurityGroupsIDs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.stagingAreaSubnetId">StagingAreaSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.stagingAreaTags">StagingAreaTags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList">DataAwsccDrsReplicationConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.useDedicatedReplicationServer">UseDedicatedReplicationServer</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AssociateDefaultSecurityGroup`<sup>Required</sup> <a name="AssociateDefaultSecurityGroup" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroup"></a>

```go
func AssociateDefaultSecurityGroup() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AutoReplicateNewDisks`<sup>Required</sup> <a name="AutoReplicateNewDisks" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.autoReplicateNewDisks"></a>

```go
func AutoReplicateNewDisks() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `BandwidthThrottling`<sup>Required</sup> <a name="BandwidthThrottling" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.bandwidthThrottling"></a>

```go
func BandwidthThrottling() *f64
```

- *Type:* *f64

---

##### `CreatePublicIp`<sup>Required</sup> <a name="CreatePublicIp" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.createPublicIp"></a>

```go
func CreatePublicIp() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DataPlaneRouting`<sup>Required</sup> <a name="DataPlaneRouting" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.dataPlaneRouting"></a>

```go
func DataPlaneRouting() *string
```

- *Type:* *string

---

##### `DefaultLargeStagingDiskType`<sup>Required</sup> <a name="DefaultLargeStagingDiskType" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskType"></a>

```go
func DefaultLargeStagingDiskType() *string
```

- *Type:* *string

---

##### `EbsEncryption`<sup>Required</sup> <a name="EbsEncryption" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.ebsEncryption"></a>

```go
func EbsEncryption() *string
```

- *Type:* *string

---

##### `EbsEncryptionKeyArn`<sup>Required</sup> <a name="EbsEncryptionKeyArn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArn"></a>

```go
func EbsEncryptionKeyArn() *string
```

- *Type:* *string

---

##### `InternetProtocol`<sup>Required</sup> <a name="InternetProtocol" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.internetProtocol"></a>

```go
func InternetProtocol() *string
```

- *Type:* *string

---

##### `PitPolicy`<sup>Required</sup> <a name="PitPolicy" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.pitPolicy"></a>

```go
func PitPolicy() DataAwsccDrsReplicationConfigurationTemplatePitPolicyList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList">DataAwsccDrsReplicationConfigurationTemplatePitPolicyList</a>

---

##### `ReplicationConfigurationTemplateId`<sup>Required</sup> <a name="ReplicationConfigurationTemplateId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.replicationConfigurationTemplateId"></a>

```go
func ReplicationConfigurationTemplateId() *string
```

- *Type:* *string

---

##### `ReplicationServerInstanceType`<sup>Required</sup> <a name="ReplicationServerInstanceType" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.replicationServerInstanceType"></a>

```go
func ReplicationServerInstanceType() *string
```

- *Type:* *string

---

##### `ReplicationServersSecurityGroupsIDs`<sup>Required</sup> <a name="ReplicationServersSecurityGroupsIDs" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs"></a>

```go
func ReplicationServersSecurityGroupsIDs() *[]*string
```

- *Type:* *[]*string

---

##### `StagingAreaSubnetId`<sup>Required</sup> <a name="StagingAreaSubnetId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.stagingAreaSubnetId"></a>

```go
func StagingAreaSubnetId() *string
```

- *Type:* *string

---

##### `StagingAreaTags`<sup>Required</sup> <a name="StagingAreaTags" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.stagingAreaTags"></a>

```go
func StagingAreaTags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.tags"></a>

```go
func Tags() DataAwsccDrsReplicationConfigurationTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList">DataAwsccDrsReplicationConfigurationTemplateTagsList</a>

---

##### `UseDedicatedReplicationServer`<sup>Required</sup> <a name="UseDedicatedReplicationServer" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.useDedicatedReplicationServer"></a>

```go
func UseDedicatedReplicationServer() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDrsReplicationConfigurationTemplateConfig <a name="DataAwsccDrsReplicationConfigurationTemplateConfig" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdrsreplicationconfigurationtemplate"

&dataawsccdrsreplicationconfigurationtemplate.DataAwsccDrsReplicationConfigurationTemplateConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_replication_configuration_template#id DataAwsccDrsReplicationConfigurationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDrsReplicationConfigurationTemplatePitPolicy <a name="DataAwsccDrsReplicationConfigurationTemplatePitPolicy" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdrsreplicationconfigurationtemplate"

&dataawsccdrsreplicationconfigurationtemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicy {

}
```


### DataAwsccDrsReplicationConfigurationTemplateTags <a name="DataAwsccDrsReplicationConfigurationTemplateTags" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdrsreplicationconfigurationtemplate"

&dataawsccdrsreplicationconfigurationtemplate.DataAwsccDrsReplicationConfigurationTemplateTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDrsReplicationConfigurationTemplatePitPolicyList <a name="DataAwsccDrsReplicationConfigurationTemplatePitPolicyList" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdrsreplicationconfigurationtemplate"

dataawsccdrsreplicationconfigurationtemplate.NewDataAwsccDrsReplicationConfigurationTemplatePitPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDrsReplicationConfigurationTemplatePitPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.get"></a>

```go
func Get(index *f64) DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference <a name="DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdrsreplicationconfigurationtemplate"

dataawsccdrsreplicationconfigurationtemplate.NewDataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDuration">RetentionDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleId">RuleId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.units">Units</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicy">DataAwsccDrsReplicationConfigurationTemplatePitPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `RetentionDuration`<sup>Required</sup> <a name="RetentionDuration" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDuration"></a>

```go
func RetentionDuration() *f64
```

- *Type:* *f64

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleId"></a>

```go
func RuleId() *f64
```

- *Type:* *f64

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.units"></a>

```go
func Units() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDrsReplicationConfigurationTemplatePitPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicy">DataAwsccDrsReplicationConfigurationTemplatePitPolicy</a>

---


### DataAwsccDrsReplicationConfigurationTemplateTagsList <a name="DataAwsccDrsReplicationConfigurationTemplateTagsList" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdrsreplicationconfigurationtemplate"

dataawsccdrsreplicationconfigurationtemplate.NewDataAwsccDrsReplicationConfigurationTemplateTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDrsReplicationConfigurationTemplateTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.get"></a>

```go
func Get(index *f64) DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference <a name="DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdrsreplicationconfigurationtemplate"

dataawsccdrsreplicationconfigurationtemplate.NewDataAwsccDrsReplicationConfigurationTemplateTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTags">DataAwsccDrsReplicationConfigurationTemplateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDrsReplicationConfigurationTemplateTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTags">DataAwsccDrsReplicationConfigurationTemplateTags</a>

---



