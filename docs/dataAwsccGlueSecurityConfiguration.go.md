# `dataAwsccGlueSecurityConfiguration` Submodule <a name="`dataAwsccGlueSecurityConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlueSecurityConfiguration <a name="DataAwsccGlueSecurityConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/glue_security_configuration awscc_glue_security_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluesecurityconfiguration"

dataawsccgluesecurityconfiguration.NewDataAwsccGlueSecurityConfiguration(scope Construct, id *string, config DataAwsccGlueSecurityConfigurationConfig) DataAwsccGlueSecurityConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig">DataAwsccGlueSecurityConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig">DataAwsccGlueSecurityConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGlueSecurityConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluesecurityconfiguration"

dataawsccgluesecurityconfiguration.DataAwsccGlueSecurityConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluesecurityconfiguration"

dataawsccgluesecurityconfiguration.DataAwsccGlueSecurityConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluesecurityconfiguration"

dataawsccgluesecurityconfiguration.DataAwsccGlueSecurityConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluesecurityconfiguration"

dataawsccgluesecurityconfiguration.DataAwsccGlueSecurityConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccGlueSecurityConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccGlueSecurityConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccGlueSecurityConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/glue_security_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlueSecurityConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference">DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference">DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlueSecurityConfigurationConfig <a name="DataAwsccGlueSecurityConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluesecurityconfiguration"

&dataawsccgluesecurityconfiguration.DataAwsccGlueSecurityConfigurationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/glue_security_configuration#id DataAwsccGlueSecurityConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlueSecurityConfigurationEncryptionConfiguration <a name="DataAwsccGlueSecurityConfigurationEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluesecurityconfiguration"

&dataawsccgluesecurityconfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfiguration {

}
```


### DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption <a name="DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluesecurityconfiguration"

&dataawsccgluesecurityconfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption {

}
```


### DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption <a name="DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluesecurityconfiguration"

&dataawsccgluesecurityconfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption {

}
```


### DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions <a name="DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluesecurityconfiguration"

&dataawsccgluesecurityconfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference <a name="DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluesecurityconfiguration"

dataawsccgluesecurityconfiguration.NewDataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.cloudwatchEncryptionMode">CloudwatchEncryptionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchEncryptionMode`<sup>Required</sup> <a name="CloudwatchEncryptionMode" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.cloudwatchEncryptionMode"></a>

```go
func CloudwatchEncryptionMode() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a>

---


### DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference <a name="DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluesecurityconfiguration"

dataawsccgluesecurityconfiguration.NewDataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.jobBookmarksEncryptionMode">JobBookmarksEncryptionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JobBookmarksEncryptionMode`<sup>Required</sup> <a name="JobBookmarksEncryptionMode" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.jobBookmarksEncryptionMode"></a>

```go
func JobBookmarksEncryptionMode() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a>

---


### DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference <a name="DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluesecurityconfiguration"

dataawsccgluesecurityconfiguration.NewDataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.cloudwatchEncryption">CloudwatchEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference">DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.jobBookmarksEncryption">JobBookmarksEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference">DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.s3Encryptions">S3Encryptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList">DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfiguration">DataAwsccGlueSecurityConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchEncryption`<sup>Required</sup> <a name="CloudwatchEncryption" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.cloudwatchEncryption"></a>

```go
func CloudwatchEncryption() DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference">DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference</a>

---

##### `JobBookmarksEncryption`<sup>Required</sup> <a name="JobBookmarksEncryption" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.jobBookmarksEncryption"></a>

```go
func JobBookmarksEncryption() DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference">DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference</a>

---

##### `S3Encryptions`<sup>Required</sup> <a name="S3Encryptions" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.s3Encryptions"></a>

```go
func S3Encryptions() DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList">DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueSecurityConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfiguration">DataAwsccGlueSecurityConfigurationEncryptionConfiguration</a>

---


### DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList <a name="DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluesecurityconfiguration"

dataawsccgluesecurityconfiguration.NewDataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.get"></a>

```go
func Get(index *f64) DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference <a name="DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluesecurityconfiguration"

dataawsccgluesecurityconfiguration.NewDataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.s3EncryptionMode">S3EncryptionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions">DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `S3EncryptionMode`<sup>Required</sup> <a name="S3EncryptionMode" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.s3EncryptionMode"></a>

```go
func S3EncryptionMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions">DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions</a>

---



