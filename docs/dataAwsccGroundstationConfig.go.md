# `dataAwsccGroundstationConfig` Submodule <a name="`dataAwsccGroundstationConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGroundstationConfig <a name="DataAwsccGroundstationConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/groundstation_config awscc_groundstation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfig(scope Construct, id *string, config DataAwsccGroundstationConfigConfig) DataAwsccGroundstationConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig">DataAwsccGroundstationConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig">DataAwsccGroundstationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGroundstationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.DataAwsccGroundstationConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.DataAwsccGroundstationConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.DataAwsccGroundstationConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.DataAwsccGroundstationConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccGroundstationConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccGroundstationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccGroundstationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/groundstation_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGroundstationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.configData">ConfigData</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference">DataAwsccGroundstationConfigConfigDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.configId">ConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList">DataAwsccGroundstationConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ConfigData`<sup>Required</sup> <a name="ConfigData" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.configData"></a>

```go
func ConfigData() DataAwsccGroundstationConfigConfigDataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference">DataAwsccGroundstationConfigConfigDataOutputReference</a>

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.configId"></a>

```go
func ConfigId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.tags"></a>

```go
func Tags() DataAwsccGroundstationConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList">DataAwsccGroundstationConfigTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGroundstationConfigConfig <a name="DataAwsccGroundstationConfigConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

&dataawsccgroundstationconfig.DataAwsccGroundstationConfigConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/groundstation_config#id DataAwsccGroundstationConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGroundstationConfigConfigData <a name="DataAwsccGroundstationConfigConfigData" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigData.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

&dataawsccgroundstationconfig.DataAwsccGroundstationConfigConfigData {

}
```


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

&dataawsccgroundstationconfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig {

}
```


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

&dataawsccgroundstationconfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig {

}
```


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

&dataawsccgroundstationconfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth {

}
```


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

&dataawsccgroundstationconfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency {

}
```


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

&dataawsccgroundstationconfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig {

}
```


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

&dataawsccgroundstationconfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig {

}
```


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

&dataawsccgroundstationconfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig {

}
```


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

&dataawsccgroundstationconfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig {

}
```


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

&dataawsccgroundstationconfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth {

}
```


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

&dataawsccgroundstationconfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency {

}
```


### DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig <a name="DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

&dataawsccgroundstationconfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig {

}
```


### DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig <a name="DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

&dataawsccgroundstationconfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig {

}
```


### DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency <a name="DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

&dataawsccgroundstationconfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency {

}
```


### DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp <a name="DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

&dataawsccgroundstationconfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp {

}
```


### DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig <a name="DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

&dataawsccgroundstationconfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig {

}
```


### DataAwsccGroundstationConfigConfigDataS3RecordingConfig <a name="DataAwsccGroundstationConfigConfigDataS3RecordingConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

&dataawsccgroundstationconfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfig {

}
```


### DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig <a name="DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

&dataawsccgroundstationconfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig {

}
```


### DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData <a name="DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

&dataawsccgroundstationconfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData {

}
```


### DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData <a name="DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

&dataawsccgroundstationconfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData {

}
```


### DataAwsccGroundstationConfigConfigDataTrackingConfig <a name="DataAwsccGroundstationConfigConfigDataTrackingConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

&dataawsccgroundstationconfig.DataAwsccGroundstationConfigConfigDataTrackingConfig {

}
```


### DataAwsccGroundstationConfigConfigDataUplinkEchoConfig <a name="DataAwsccGroundstationConfigConfigDataUplinkEchoConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

&dataawsccgroundstationconfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfig {

}
```


### DataAwsccGroundstationConfigTags <a name="DataAwsccGroundstationConfigTags" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

&dataawsccgroundstationconfig.DataAwsccGroundstationConfigTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.spectrumConfig">SpectrumConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpectrumConfig`<sup>Required</sup> <a name="SpectrumConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.spectrumConfig"></a>

```go
func SpectrumConfig() DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.units">Units</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.units"></a>

```go
func Units() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.units">Units</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.units"></a>

```go
func Units() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.bandwidth">Bandwidth</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.centerFrequency">CenterFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.polarization">Polarization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.bandwidth"></a>

```go
func Bandwidth() DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference</a>

---

##### `CenterFrequency`<sup>Required</sup> <a name="CenterFrequency" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.centerFrequency"></a>

```go
func CenterFrequency() DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference</a>

---

##### `Polarization`<sup>Required</sup> <a name="Polarization" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.polarization"></a>

```go
func Polarization() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.unvalidatedJson">UnvalidatedJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UnvalidatedJson`<sup>Required</sup> <a name="UnvalidatedJson" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.unvalidatedJson"></a>

```go
func UnvalidatedJson() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.unvalidatedJson">UnvalidatedJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UnvalidatedJson`<sup>Required</sup> <a name="UnvalidatedJson" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.unvalidatedJson"></a>

```go
func UnvalidatedJson() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.decodeConfig">DecodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.demodulationConfig">DemodulationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.spectrumConfig">SpectrumConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DecodeConfig`<sup>Required</sup> <a name="DecodeConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.decodeConfig"></a>

```go
func DecodeConfig() DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference</a>

---

##### `DemodulationConfig`<sup>Required</sup> <a name="DemodulationConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.demodulationConfig"></a>

```go
func DemodulationConfig() DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference</a>

---

##### `SpectrumConfig`<sup>Required</sup> <a name="SpectrumConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.spectrumConfig"></a>

```go
func SpectrumConfig() DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.units">Units</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.units"></a>

```go
func Units() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.units">Units</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.units"></a>

```go
func Units() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.bandwidth">Bandwidth</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.centerFrequency">CenterFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.polarization">Polarization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.bandwidth"></a>

```go
func Bandwidth() DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference</a>

---

##### `CenterFrequency`<sup>Required</sup> <a name="CenterFrequency" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.centerFrequency"></a>

```go
func CenterFrequency() DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference</a>

---

##### `Polarization`<sup>Required</sup> <a name="Polarization" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.polarization"></a>

```go
func Polarization() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.spectrumConfig">SpectrumConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.targetEirp">TargetEirp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.transmitDisabled">TransmitDisabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpectrumConfig`<sup>Required</sup> <a name="SpectrumConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.spectrumConfig"></a>

```go
func SpectrumConfig() DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference</a>

---

##### `TargetEirp`<sup>Required</sup> <a name="TargetEirp" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.targetEirp"></a>

```go
func TargetEirp() DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference</a>

---

##### `TransmitDisabled`<sup>Required</sup> <a name="TransmitDisabled" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.transmitDisabled"></a>

```go
func TransmitDisabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.units">Units</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.units"></a>

```go
func Units() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.centerFrequency">CenterFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.polarization">Polarization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CenterFrequency`<sup>Required</sup> <a name="CenterFrequency" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.centerFrequency"></a>

```go
func CenterFrequency() DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference</a>

---

##### `Polarization`<sup>Required</sup> <a name="Polarization" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.polarization"></a>

```go
func Polarization() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.units">Units</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.units"></a>

```go
func Units() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp</a>

---


### DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointName">DataflowEndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointRegion">DataflowEndpointRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig">DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataflowEndpointName`<sup>Required</sup> <a name="DataflowEndpointName" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointName"></a>

```go
func DataflowEndpointName() *string
```

- *Type:* *string

---

##### `DataflowEndpointRegion`<sup>Required</sup> <a name="DataflowEndpointRegion" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointRegion"></a>

```go
func DataflowEndpointRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig">DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig</a>

---


### DataAwsccGroundstationConfigConfigDataOutputReference <a name="DataAwsccGroundstationConfigConfigDataOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfigConfigDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationConfigConfigDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.antennaDownlinkConfig">AntennaDownlinkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.antennaDownlinkDemodDecodeConfig">AntennaDownlinkDemodDecodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.antennaUplinkConfig">AntennaUplinkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.dataflowEndpointConfig">DataflowEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference">DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.s3RecordingConfig">S3RecordingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference">DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.telemetrySinkConfig">TelemetrySinkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference">DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.trackingConfig">TrackingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference">DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.uplinkEchoConfig">UplinkEchoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference">DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigData">DataAwsccGroundstationConfigConfigData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AntennaDownlinkConfig`<sup>Required</sup> <a name="AntennaDownlinkConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.antennaDownlinkConfig"></a>

```go
func AntennaDownlinkConfig() DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference</a>

---

##### `AntennaDownlinkDemodDecodeConfig`<sup>Required</sup> <a name="AntennaDownlinkDemodDecodeConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.antennaDownlinkDemodDecodeConfig"></a>

```go
func AntennaDownlinkDemodDecodeConfig() DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference</a>

---

##### `AntennaUplinkConfig`<sup>Required</sup> <a name="AntennaUplinkConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.antennaUplinkConfig"></a>

```go
func AntennaUplinkConfig() DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference</a>

---

##### `DataflowEndpointConfig`<sup>Required</sup> <a name="DataflowEndpointConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.dataflowEndpointConfig"></a>

```go
func DataflowEndpointConfig() DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference">DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference</a>

---

##### `S3RecordingConfig`<sup>Required</sup> <a name="S3RecordingConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.s3RecordingConfig"></a>

```go
func S3RecordingConfig() DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference">DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference</a>

---

##### `TelemetrySinkConfig`<sup>Required</sup> <a name="TelemetrySinkConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.telemetrySinkConfig"></a>

```go
func TelemetrySinkConfig() DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference">DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference</a>

---

##### `TrackingConfig`<sup>Required</sup> <a name="TrackingConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.trackingConfig"></a>

```go
func TrackingConfig() DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference">DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference</a>

---

##### `UplinkEchoConfig`<sup>Required</sup> <a name="UplinkEchoConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.uplinkEchoConfig"></a>

```go
func UplinkEchoConfig() DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference">DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationConfigConfigData
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigData">DataAwsccGroundstationConfigConfigData</a>

---


### DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.property.bucketArn">BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfig">DataAwsccGroundstationConfigConfigDataS3RecordingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.property.bucketArn"></a>

```go
func BucketArn() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationConfigConfigDataS3RecordingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfig">DataAwsccGroundstationConfigConfigDataS3RecordingConfig</a>

---


### DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkData">TelemetrySinkData</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference">DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkType">TelemetrySinkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig">DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TelemetrySinkData`<sup>Required</sup> <a name="TelemetrySinkData" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkData"></a>

```go
func TelemetrySinkData() DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference">DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference</a>

---

##### `TelemetrySinkType`<sup>Required</sup> <a name="TelemetrySinkType" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkType"></a>

```go
func TelemetrySinkType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig">DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig</a>

---


### DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference <a name="DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisDataStreamArn">KinesisDataStreamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisRoleArn">KinesisRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData">DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KinesisDataStreamArn`<sup>Required</sup> <a name="KinesisDataStreamArn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisDataStreamArn"></a>

```go
func KinesisDataStreamArn() *string
```

- *Type:* *string

---

##### `KinesisRoleArn`<sup>Required</sup> <a name="KinesisRoleArn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisRoleArn"></a>

```go
func KinesisRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData">DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData</a>

---


### DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference <a name="DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.kinesisDataStreamData">KinesisDataStreamData</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference">DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData">DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KinesisDataStreamData`<sup>Required</sup> <a name="KinesisDataStreamData" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.kinesisDataStreamData"></a>

```go
func KinesisDataStreamData() DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference">DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData">DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData</a>

---


### DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.property.autotrack">Autotrack</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfig">DataAwsccGroundstationConfigConfigDataTrackingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Autotrack`<sup>Required</sup> <a name="Autotrack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.property.autotrack"></a>

```go
func Autotrack() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationConfigConfigDataTrackingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfig">DataAwsccGroundstationConfigConfigDataTrackingConfig</a>

---


### DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.antennaUplinkConfigArn">AntennaUplinkConfigArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfig">DataAwsccGroundstationConfigConfigDataUplinkEchoConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AntennaUplinkConfigArn`<sup>Required</sup> <a name="AntennaUplinkConfigArn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.antennaUplinkConfigArn"></a>

```go
func AntennaUplinkConfigArn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationConfigConfigDataUplinkEchoConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfig">DataAwsccGroundstationConfigConfigDataUplinkEchoConfig</a>

---


### DataAwsccGroundstationConfigTagsList <a name="DataAwsccGroundstationConfigTagsList" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfigTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGroundstationConfigTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.get"></a>

```go
func Get(index *f64) DataAwsccGroundstationConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGroundstationConfigTagsOutputReference <a name="DataAwsccGroundstationConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationconfig"

dataawsccgroundstationconfig.NewDataAwsccGroundstationConfigTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGroundstationConfigTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTags">DataAwsccGroundstationConfigTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationConfigTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTags">DataAwsccGroundstationConfigTags</a>

---



