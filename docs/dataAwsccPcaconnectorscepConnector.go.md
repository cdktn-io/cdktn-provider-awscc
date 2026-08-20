# `dataAwsccPcaconnectorscepConnector` Submodule <a name="`dataAwsccPcaconnectorscepConnector` Submodule" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPcaconnectorscepConnector <a name="DataAwsccPcaconnectorscepConnector" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/pcaconnectorscep_connector awscc_pcaconnectorscep_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectorscepconnector"

dataawsccpcaconnectorscepconnector.NewDataAwsccPcaconnectorscepConnector(scope Construct, id *string, config DataAwsccPcaconnectorscepConnectorConfig) DataAwsccPcaconnectorscepConnector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig">DataAwsccPcaconnectorscepConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig">DataAwsccPcaconnectorscepConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccPcaconnectorscepConnector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectorscepconnector"

dataawsccpcaconnectorscepconnector.DataAwsccPcaconnectorscepConnector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectorscepconnector"

dataawsccpcaconnectorscepconnector.DataAwsccPcaconnectorscepConnector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectorscepconnector"

dataawsccpcaconnectorscepconnector.DataAwsccPcaconnectorscepConnector_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectorscepconnector"

dataawsccpcaconnectorscepconnector.DataAwsccPcaconnectorscepConnector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccPcaconnectorscepConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccPcaconnectorscepConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccPcaconnectorscepConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/pcaconnectorscep_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPcaconnectorscepConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.certificateAuthorityArn">CertificateAuthorityArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.connectorArn">ConnectorArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.mobileDeviceManagement">MobileDeviceManagement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference">DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.openIdConfiguration">OpenIdConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference">DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CertificateAuthorityArn`<sup>Required</sup> <a name="CertificateAuthorityArn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.certificateAuthorityArn"></a>

```go
func CertificateAuthorityArn() *string
```

- *Type:* *string

---

##### `ConnectorArn`<sup>Required</sup> <a name="ConnectorArn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.connectorArn"></a>

```go
func ConnectorArn() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `MobileDeviceManagement`<sup>Required</sup> <a name="MobileDeviceManagement" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.mobileDeviceManagement"></a>

```go
func MobileDeviceManagement() DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference">DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference</a>

---

##### `OpenIdConfiguration`<sup>Required</sup> <a name="OpenIdConfiguration" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.openIdConfiguration"></a>

```go
func OpenIdConfiguration() DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference">DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.vpcEndpointId"></a>

```go
func VpcEndpointId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPcaconnectorscepConnectorConfig <a name="DataAwsccPcaconnectorscepConnectorConfig" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectorscepconnector"

&dataawsccpcaconnectorscepconnector.DataAwsccPcaconnectorscepConnectorConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/pcaconnectorscep_connector#id DataAwsccPcaconnectorscepConnector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccPcaconnectorscepConnectorMobileDeviceManagement <a name="DataAwsccPcaconnectorscepConnectorMobileDeviceManagement" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectorscepconnector"

&dataawsccpcaconnectorscepconnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagement {

}
```


### DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune <a name="DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectorscepconnector"

&dataawsccpcaconnectorscepconnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune {

}
```


### DataAwsccPcaconnectorscepConnectorOpenIdConfiguration <a name="DataAwsccPcaconnectorscepConnectorOpenIdConfiguration" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectorscepconnector"

&dataawsccpcaconnectorscepconnector.DataAwsccPcaconnectorscepConnectorOpenIdConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference <a name="DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectorscepconnector"

dataawsccpcaconnectorscepconnector.NewDataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.azureApplicationId">AzureApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune">DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzureApplicationId`<sup>Required</sup> <a name="AzureApplicationId" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.azureApplicationId"></a>

```go
func AzureApplicationId() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune">DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune</a>

---


### DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference <a name="DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectorscepconnector"

dataawsccpcaconnectorscepconnector.NewDataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.intune">Intune</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference">DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagement">DataAwsccPcaconnectorscepConnectorMobileDeviceManagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Intune`<sup>Required</sup> <a name="Intune" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.intune"></a>

```go
func Intune() DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference">DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPcaconnectorscepConnectorMobileDeviceManagement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagement">DataAwsccPcaconnectorscepConnectorMobileDeviceManagement</a>

---


### DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference <a name="DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectorscepconnector"

dataawsccpcaconnectorscepconnector.NewDataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfiguration">DataAwsccPcaconnectorscepConnectorOpenIdConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPcaconnectorscepConnectorOpenIdConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfiguration">DataAwsccPcaconnectorscepConnectorOpenIdConfiguration</a>

---



