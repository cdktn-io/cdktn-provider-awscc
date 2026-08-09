# `dataAwsccTransferWebApp` Submodule <a name="`dataAwsccTransferWebApp` Submodule" id="@cdktn/provider-awscc.dataAwsccTransferWebApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccTransferWebApp <a name="DataAwsccTransferWebApp" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/transfer_web_app awscc_transfer_web_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferwebapp"

dataawscctransferwebapp.NewDataAwsccTransferWebApp(scope Construct, id *string, config DataAwsccTransferWebAppConfig) DataAwsccTransferWebApp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppConfig">DataAwsccTransferWebAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppConfig">DataAwsccTransferWebAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccTransferWebApp resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferwebapp"

dataawscctransferwebapp.DataAwsccTransferWebApp_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferwebapp"

dataawscctransferwebapp.DataAwsccTransferWebApp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferwebapp"

dataawscctransferwebapp.DataAwsccTransferWebApp_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferwebapp"

dataawscctransferwebapp.DataAwsccTransferWebApp_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccTransferWebApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccTransferWebApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccTransferWebApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/transfer_web_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccTransferWebApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.accessEndpoint">AccessEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.endpointDetails">EndpointDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference">DataAwsccTransferWebAppEndpointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.identityProviderDetails">IdentityProviderDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference">DataAwsccTransferWebAppIdentityProviderDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList">DataAwsccTransferWebAppTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.webAppCustomization">WebAppCustomization</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference">DataAwsccTransferWebAppWebAppCustomizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.webAppEndpointPolicy">WebAppEndpointPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.webAppId">WebAppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.webAppUnits">WebAppUnits</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference">DataAwsccTransferWebAppWebAppUnitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AccessEndpoint`<sup>Required</sup> <a name="AccessEndpoint" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.accessEndpoint"></a>

```go
func AccessEndpoint() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `EndpointDetails`<sup>Required</sup> <a name="EndpointDetails" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.endpointDetails"></a>

```go
func EndpointDetails() DataAwsccTransferWebAppEndpointDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference">DataAwsccTransferWebAppEndpointDetailsOutputReference</a>

---

##### `IdentityProviderDetails`<sup>Required</sup> <a name="IdentityProviderDetails" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.identityProviderDetails"></a>

```go
func IdentityProviderDetails() DataAwsccTransferWebAppIdentityProviderDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference">DataAwsccTransferWebAppIdentityProviderDetailsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.tags"></a>

```go
func Tags() DataAwsccTransferWebAppTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList">DataAwsccTransferWebAppTagsList</a>

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.vpcEndpointId"></a>

```go
func VpcEndpointId() *string
```

- *Type:* *string

---

##### `WebAppCustomization`<sup>Required</sup> <a name="WebAppCustomization" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.webAppCustomization"></a>

```go
func WebAppCustomization() DataAwsccTransferWebAppWebAppCustomizationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference">DataAwsccTransferWebAppWebAppCustomizationOutputReference</a>

---

##### `WebAppEndpointPolicy`<sup>Required</sup> <a name="WebAppEndpointPolicy" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.webAppEndpointPolicy"></a>

```go
func WebAppEndpointPolicy() *string
```

- *Type:* *string

---

##### `WebAppId`<sup>Required</sup> <a name="WebAppId" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.webAppId"></a>

```go
func WebAppId() *string
```

- *Type:* *string

---

##### `WebAppUnits`<sup>Required</sup> <a name="WebAppUnits" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.webAppUnits"></a>

```go
func WebAppUnits() DataAwsccTransferWebAppWebAppUnitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference">DataAwsccTransferWebAppWebAppUnitsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebApp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccTransferWebAppConfig <a name="DataAwsccTransferWebAppConfig" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferwebapp"

&dataawscctransferwebapp.DataAwsccTransferWebAppConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/transfer_web_app#id DataAwsccTransferWebApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccTransferWebAppEndpointDetails <a name="DataAwsccTransferWebAppEndpointDetails" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferwebapp"

&dataawscctransferwebapp.DataAwsccTransferWebAppEndpointDetails {

}
```


### DataAwsccTransferWebAppEndpointDetailsVpc <a name="DataAwsccTransferWebAppEndpointDetailsVpc" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpc.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferwebapp"

&dataawscctransferwebapp.DataAwsccTransferWebAppEndpointDetailsVpc {

}
```


### DataAwsccTransferWebAppIdentityProviderDetails <a name="DataAwsccTransferWebAppIdentityProviderDetails" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferwebapp"

&dataawscctransferwebapp.DataAwsccTransferWebAppIdentityProviderDetails {

}
```


### DataAwsccTransferWebAppTags <a name="DataAwsccTransferWebAppTags" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferwebapp"

&dataawscctransferwebapp.DataAwsccTransferWebAppTags {

}
```


### DataAwsccTransferWebAppWebAppCustomization <a name="DataAwsccTransferWebAppWebAppCustomization" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomization.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferwebapp"

&dataawscctransferwebapp.DataAwsccTransferWebAppWebAppCustomization {

}
```


### DataAwsccTransferWebAppWebAppUnits <a name="DataAwsccTransferWebAppWebAppUnits" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnits.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferwebapp"

&dataawscctransferwebapp.DataAwsccTransferWebAppWebAppUnits {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccTransferWebAppEndpointDetailsOutputReference <a name="DataAwsccTransferWebAppEndpointDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferwebapp"

dataawscctransferwebapp.NewDataAwsccTransferWebAppEndpointDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTransferWebAppEndpointDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.property.vpc">Vpc</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference">DataAwsccTransferWebAppEndpointDetailsVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetails">DataAwsccTransferWebAppEndpointDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.property.vpc"></a>

```go
func Vpc() DataAwsccTransferWebAppEndpointDetailsVpcOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference">DataAwsccTransferWebAppEndpointDetailsVpcOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTransferWebAppEndpointDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetails">DataAwsccTransferWebAppEndpointDetails</a>

---


### DataAwsccTransferWebAppEndpointDetailsVpcOutputReference <a name="DataAwsccTransferWebAppEndpointDetailsVpcOutputReference" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferwebapp"

dataawscctransferwebapp.NewDataAwsccTransferWebAppEndpointDetailsVpcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTransferWebAppEndpointDetailsVpcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpc">DataAwsccTransferWebAppEndpointDetailsVpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpcOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTransferWebAppEndpointDetailsVpc
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppEndpointDetailsVpc">DataAwsccTransferWebAppEndpointDetailsVpc</a>

---


### DataAwsccTransferWebAppIdentityProviderDetailsOutputReference <a name="DataAwsccTransferWebAppIdentityProviderDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferwebapp"

dataawscctransferwebapp.NewDataAwsccTransferWebAppIdentityProviderDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTransferWebAppIdentityProviderDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.property.applicationArn">ApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetails">DataAwsccTransferWebAppIdentityProviderDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.property.applicationArn"></a>

```go
func ApplicationArn() *string
```

- *Type:* *string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTransferWebAppIdentityProviderDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppIdentityProviderDetails">DataAwsccTransferWebAppIdentityProviderDetails</a>

---


### DataAwsccTransferWebAppTagsList <a name="DataAwsccTransferWebAppTagsList" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferwebapp"

dataawscctransferwebapp.NewDataAwsccTransferWebAppTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccTransferWebAppTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList.get"></a>

```go
func Get(index *f64) DataAwsccTransferWebAppTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccTransferWebAppTagsOutputReference <a name="DataAwsccTransferWebAppTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferwebapp"

dataawscctransferwebapp.NewDataAwsccTransferWebAppTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccTransferWebAppTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTags">DataAwsccTransferWebAppTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTransferWebAppTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppTags">DataAwsccTransferWebAppTags</a>

---


### DataAwsccTransferWebAppWebAppCustomizationOutputReference <a name="DataAwsccTransferWebAppWebAppCustomizationOutputReference" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferwebapp"

dataawscctransferwebapp.NewDataAwsccTransferWebAppWebAppCustomizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTransferWebAppWebAppCustomizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.property.faviconFile">FaviconFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.property.logoFile">LogoFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomization">DataAwsccTransferWebAppWebAppCustomization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FaviconFile`<sup>Required</sup> <a name="FaviconFile" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.property.faviconFile"></a>

```go
func FaviconFile() *string
```

- *Type:* *string

---

##### `LogoFile`<sup>Required</sup> <a name="LogoFile" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.property.logoFile"></a>

```go
func LogoFile() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomizationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTransferWebAppWebAppCustomization
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppCustomization">DataAwsccTransferWebAppWebAppCustomization</a>

---


### DataAwsccTransferWebAppWebAppUnitsOutputReference <a name="DataAwsccTransferWebAppWebAppUnitsOutputReference" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctransferwebapp"

dataawscctransferwebapp.NewDataAwsccTransferWebAppWebAppUnitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTransferWebAppWebAppUnitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.property.provisioned">Provisioned</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnits">DataAwsccTransferWebAppWebAppUnits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Provisioned`<sup>Required</sup> <a name="Provisioned" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.property.provisioned"></a>

```go
func Provisioned() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnitsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTransferWebAppWebAppUnits
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferWebApp.DataAwsccTransferWebAppWebAppUnits">DataAwsccTransferWebAppWebAppUnits</a>

---



