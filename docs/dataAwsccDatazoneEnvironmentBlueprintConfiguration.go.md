# `dataAwsccDatazoneEnvironmentBlueprintConfiguration` Submodule <a name="`dataAwsccDatazoneEnvironmentBlueprintConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatazoneEnvironmentBlueprintConfiguration <a name="DataAwsccDatazoneEnvironmentBlueprintConfiguration" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/datazone_environment_blueprint_configuration awscc_datazone_environment_blueprint_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneenvironmentblueprintconfiguration"

dataawsccdatazoneenvironmentblueprintconfiguration.NewDataAwsccDatazoneEnvironmentBlueprintConfiguration(scope Construct, id *string, config DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig) DataAwsccDatazoneEnvironmentBlueprintConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig">DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig">DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatazoneEnvironmentBlueprintConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneenvironmentblueprintconfiguration"

dataawsccdatazoneenvironmentblueprintconfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneenvironmentblueprintconfiguration"

dataawsccdatazoneenvironmentblueprintconfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneenvironmentblueprintconfiguration"

dataawsccdatazoneenvironmentblueprintconfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneenvironmentblueprintconfiguration"

dataawsccdatazoneenvironmentblueprintconfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccDatazoneEnvironmentBlueprintConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccDatazoneEnvironmentBlueprintConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccDatazoneEnvironmentBlueprintConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/datazone_environment_blueprint_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatazoneEnvironmentBlueprintConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.domainIdentifier">DomainIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.enabledRegions">EnabledRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintId">EnvironmentBlueprintId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintIdentifier">EnvironmentBlueprintIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.environmentRolePermissionBoundary">EnvironmentRolePermissionBoundary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.globalParameters">GlobalParameters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.manageAccessRoleArn">ManageAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.provisioningConfigurations">ProvisioningConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList">DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.provisioningRoleArn">ProvisioningRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.regionalParameters">RegionalParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList">DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.domainIdentifier"></a>

```go
func DomainIdentifier() *string
```

- *Type:* *string

---

##### `EnabledRegions`<sup>Required</sup> <a name="EnabledRegions" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.enabledRegions"></a>

```go
func EnabledRegions() *[]*string
```

- *Type:* *[]*string

---

##### `EnvironmentBlueprintId`<sup>Required</sup> <a name="EnvironmentBlueprintId" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintId"></a>

```go
func EnvironmentBlueprintId() *string
```

- *Type:* *string

---

##### `EnvironmentBlueprintIdentifier`<sup>Required</sup> <a name="EnvironmentBlueprintIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintIdentifier"></a>

```go
func EnvironmentBlueprintIdentifier() *string
```

- *Type:* *string

---

##### `EnvironmentRolePermissionBoundary`<sup>Required</sup> <a name="EnvironmentRolePermissionBoundary" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.environmentRolePermissionBoundary"></a>

```go
func EnvironmentRolePermissionBoundary() *string
```

- *Type:* *string

---

##### `GlobalParameters`<sup>Required</sup> <a name="GlobalParameters" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.globalParameters"></a>

```go
func GlobalParameters() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `ManageAccessRoleArn`<sup>Required</sup> <a name="ManageAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.manageAccessRoleArn"></a>

```go
func ManageAccessRoleArn() *string
```

- *Type:* *string

---

##### `ProvisioningConfigurations`<sup>Required</sup> <a name="ProvisioningConfigurations" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.provisioningConfigurations"></a>

```go
func ProvisioningConfigurations() DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList">DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList</a>

---

##### `ProvisioningRoleArn`<sup>Required</sup> <a name="ProvisioningRoleArn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.provisioningRoleArn"></a>

```go
func ProvisioningRoleArn() *string
```

- *Type:* *string

---

##### `RegionalParameters`<sup>Required</sup> <a name="RegionalParameters" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.regionalParameters"></a>

```go
func RegionalParameters() DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList">DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig <a name="DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneenvironmentblueprintconfiguration"

&dataawsccdatazoneenvironmentblueprintconfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/datazone_environment_blueprint_configuration#id DataAwsccDatazoneEnvironmentBlueprintConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations <a name="DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneenvironmentblueprintconfiguration"

&dataawsccdatazoneenvironmentblueprintconfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations {

}
```


### DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration <a name="DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneenvironmentblueprintconfiguration"

&dataawsccdatazoneenvironmentblueprintconfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration {

}
```


### DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters <a name="DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneenvironmentblueprintconfiguration"

&dataawsccdatazoneenvironmentblueprintconfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference <a name="DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneenvironmentblueprintconfiguration"

dataawsccdatazoneenvironmentblueprintconfiguration.NewDataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationExcludeS3Locations">LocationRegistrationExcludeS3Locations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationRole">LocationRegistrationRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationRegistrationExcludeS3Locations`<sup>Required</sup> <a name="LocationRegistrationExcludeS3Locations" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationExcludeS3Locations"></a>

```go
func LocationRegistrationExcludeS3Locations() *[]*string
```

- *Type:* *[]*string

---

##### `LocationRegistrationRole`<sup>Required</sup> <a name="LocationRegistrationRole" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationRole"></a>

```go
func LocationRegistrationRole() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a>

---


### DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList <a name="DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneenvironmentblueprintconfiguration"

dataawsccdatazoneenvironmentblueprintconfiguration.NewDataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference <a name="DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneenvironmentblueprintconfiguration"

dataawsccdatazoneenvironmentblueprintconfiguration.NewDataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.lakeFormationConfiguration">LakeFormationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference">DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LakeFormationConfiguration`<sup>Required</sup> <a name="LakeFormationConfiguration" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.lakeFormationConfiguration"></a>

```go
func LakeFormationConfiguration() DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference">DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>

---


### DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList <a name="DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneenvironmentblueprintconfiguration"

dataawsccdatazoneenvironmentblueprintconfiguration.NewDataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.get"></a>

```go
func Get(index *f64) DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference <a name="DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneenvironmentblueprintconfiguration"

dataawsccdatazoneenvironmentblueprintconfiguration.NewDataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.parameters">Parameters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters">DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.parameters"></a>

```go
func Parameters() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters">DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>

---



