# `dataAwsccCognitoLogDeliveryConfiguration` Submodule <a name="`dataAwsccCognitoLogDeliveryConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCognitoLogDeliveryConfiguration <a name="DataAwsccCognitoLogDeliveryConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cognito_log_delivery_configuration awscc_cognito_log_delivery_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitologdeliveryconfiguration"

dataawscccognitologdeliveryconfiguration.NewDataAwsccCognitoLogDeliveryConfiguration(scope Construct, id *string, config DataAwsccCognitoLogDeliveryConfigurationConfig) DataAwsccCognitoLogDeliveryConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig">DataAwsccCognitoLogDeliveryConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig">DataAwsccCognitoLogDeliveryConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCognitoLogDeliveryConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitologdeliveryconfiguration"

dataawscccognitologdeliveryconfiguration.DataAwsccCognitoLogDeliveryConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitologdeliveryconfiguration"

dataawscccognitologdeliveryconfiguration.DataAwsccCognitoLogDeliveryConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitologdeliveryconfiguration"

dataawscccognitologdeliveryconfiguration.DataAwsccCognitoLogDeliveryConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitologdeliveryconfiguration"

dataawscccognitologdeliveryconfiguration.DataAwsccCognitoLogDeliveryConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCognitoLogDeliveryConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCognitoLogDeliveryConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCognitoLogDeliveryConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cognito_log_delivery_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCognitoLogDeliveryConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.logConfigurations">LogConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.logDeliveryConfigurationId">LogDeliveryConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `LogConfigurations`<sup>Required</sup> <a name="LogConfigurations" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.logConfigurations"></a>

```go
func LogConfigurations() DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList</a>

---

##### `LogDeliveryConfigurationId`<sup>Required</sup> <a name="LogDeliveryConfigurationId" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.logDeliveryConfigurationId"></a>

```go
func LogDeliveryConfigurationId() *string
```

- *Type:* *string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.userPoolId"></a>

```go
func UserPoolId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCognitoLogDeliveryConfigurationConfig <a name="DataAwsccCognitoLogDeliveryConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitologdeliveryconfiguration"

&dataawscccognitologdeliveryconfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cognito_log_delivery_configuration#id DataAwsccCognitoLogDeliveryConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCognitoLogDeliveryConfigurationLogConfigurations <a name="DataAwsccCognitoLogDeliveryConfigurationLogConfigurations" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitologdeliveryconfiguration"

&dataawscccognitologdeliveryconfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurations {

}
```


### DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration <a name="DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitologdeliveryconfiguration"

&dataawscccognitologdeliveryconfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration {

}
```


### DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration <a name="DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitologdeliveryconfiguration"

&dataawscccognitologdeliveryconfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration {

}
```


### DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3Configuration <a name="DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3Configuration" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3Configuration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitologdeliveryconfiguration"

&dataawscccognitologdeliveryconfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3Configuration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference <a name="DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitologdeliveryconfiguration"

dataawscccognitologdeliveryconfiguration.NewDataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.logGroupArn"></a>

```go
func LogGroupArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration</a>

---


### DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference <a name="DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitologdeliveryconfiguration"

dataawscccognitologdeliveryconfiguration.NewDataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.streamArn">StreamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.streamArn"></a>

```go
func StreamArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration</a>

---


### DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList <a name="DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitologdeliveryconfiguration"

dataawscccognitologdeliveryconfiguration.NewDataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference <a name="DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitologdeliveryconfiguration"

dataawscccognitologdeliveryconfiguration.NewDataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.cloudwatchLogsConfiguration">CloudwatchLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.eventSource">EventSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.firehoseConfiguration">FirehoseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurations">DataAwsccCognitoLogDeliveryConfigurationLogConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogsConfiguration`<sup>Required</sup> <a name="CloudwatchLogsConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.cloudwatchLogsConfiguration"></a>

```go
func CloudwatchLogsConfiguration() DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference</a>

---

##### `EventSource`<sup>Required</sup> <a name="EventSource" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.eventSource"></a>

```go
func EventSource() *string
```

- *Type:* *string

---

##### `FirehoseConfiguration`<sup>Required</sup> <a name="FirehoseConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.firehoseConfiguration"></a>

```go
func FirehoseConfiguration() DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference</a>

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `S3Configuration`<sup>Required</sup> <a name="S3Configuration" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.s3Configuration"></a>

```go
func S3Configuration() DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCognitoLogDeliveryConfigurationLogConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurations">DataAwsccCognitoLogDeliveryConfigurationLogConfigurations</a>

---


### DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference <a name="DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitologdeliveryconfiguration"

dataawscccognitologdeliveryconfiguration.NewDataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.bucketArn">BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3Configuration">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3Configuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.bucketArn"></a>

```go
func BucketArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3Configuration">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3Configuration</a>

---



