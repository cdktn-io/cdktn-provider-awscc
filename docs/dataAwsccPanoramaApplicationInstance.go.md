# `dataAwsccPanoramaApplicationInstance` Submodule <a name="`dataAwsccPanoramaApplicationInstance` Submodule" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPanoramaApplicationInstance <a name="DataAwsccPanoramaApplicationInstance" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/panorama_application_instance awscc_panorama_application_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpanoramaapplicationinstance"

dataawsccpanoramaapplicationinstance.NewDataAwsccPanoramaApplicationInstance(scope Construct, id *string, config DataAwsccPanoramaApplicationInstanceConfig) DataAwsccPanoramaApplicationInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig">DataAwsccPanoramaApplicationInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig">DataAwsccPanoramaApplicationInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccPanoramaApplicationInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpanoramaapplicationinstance"

dataawsccpanoramaapplicationinstance.DataAwsccPanoramaApplicationInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpanoramaapplicationinstance"

dataawsccpanoramaapplicationinstance.DataAwsccPanoramaApplicationInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpanoramaapplicationinstance"

dataawsccpanoramaapplicationinstance.DataAwsccPanoramaApplicationInstance_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpanoramaapplicationinstance"

dataawsccpanoramaapplicationinstance.DataAwsccPanoramaApplicationInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccPanoramaApplicationInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccPanoramaApplicationInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccPanoramaApplicationInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/panorama_application_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPanoramaApplicationInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.applicationInstanceId">ApplicationInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.applicationInstanceIdToReplace">ApplicationInstanceIdToReplace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.createdTime">CreatedTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.defaultRuntimeContextDevice">DefaultRuntimeContextDevice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.defaultRuntimeContextDeviceName">DefaultRuntimeContextDeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.healthStatus">HealthStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.manifestOverridesPayload">ManifestOverridesPayload</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference">DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.manifestPayload">ManifestPayload</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference">DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.runtimeRoleArn">RuntimeRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.statusDescription">StatusDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList">DataAwsccPanoramaApplicationInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ApplicationInstanceId`<sup>Required</sup> <a name="ApplicationInstanceId" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.applicationInstanceId"></a>

```go
func ApplicationInstanceId() *string
```

- *Type:* *string

---

##### `ApplicationInstanceIdToReplace`<sup>Required</sup> <a name="ApplicationInstanceIdToReplace" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.applicationInstanceIdToReplace"></a>

```go
func ApplicationInstanceIdToReplace() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.createdTime"></a>

```go
func CreatedTime() *f64
```

- *Type:* *f64

---

##### `DefaultRuntimeContextDevice`<sup>Required</sup> <a name="DefaultRuntimeContextDevice" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.defaultRuntimeContextDevice"></a>

```go
func DefaultRuntimeContextDevice() *string
```

- *Type:* *string

---

##### `DefaultRuntimeContextDeviceName`<sup>Required</sup> <a name="DefaultRuntimeContextDeviceName" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.defaultRuntimeContextDeviceName"></a>

```go
func DefaultRuntimeContextDeviceName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HealthStatus`<sup>Required</sup> <a name="HealthStatus" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.healthStatus"></a>

```go
func HealthStatus() *string
```

- *Type:* *string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *f64
```

- *Type:* *f64

---

##### `ManifestOverridesPayload`<sup>Required</sup> <a name="ManifestOverridesPayload" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.manifestOverridesPayload"></a>

```go
func ManifestOverridesPayload() DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference">DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference</a>

---

##### `ManifestPayload`<sup>Required</sup> <a name="ManifestPayload" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.manifestPayload"></a>

```go
func ManifestPayload() DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference">DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RuntimeRoleArn`<sup>Required</sup> <a name="RuntimeRoleArn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.runtimeRoleArn"></a>

```go
func RuntimeRoleArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusDescription`<sup>Required</sup> <a name="StatusDescription" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.statusDescription"></a>

```go
func StatusDescription() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.tags"></a>

```go
func Tags() DataAwsccPanoramaApplicationInstanceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList">DataAwsccPanoramaApplicationInstanceTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPanoramaApplicationInstanceConfig <a name="DataAwsccPanoramaApplicationInstanceConfig" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpanoramaapplicationinstance"

&dataawsccpanoramaapplicationinstance.DataAwsccPanoramaApplicationInstanceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/panorama_application_instance#id DataAwsccPanoramaApplicationInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccPanoramaApplicationInstanceManifestOverridesPayload <a name="DataAwsccPanoramaApplicationInstanceManifestOverridesPayload" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpanoramaapplicationinstance"

&dataawsccpanoramaapplicationinstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayload {

}
```


### DataAwsccPanoramaApplicationInstanceManifestPayload <a name="DataAwsccPanoramaApplicationInstanceManifestPayload" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpanoramaapplicationinstance"

&dataawsccpanoramaapplicationinstance.DataAwsccPanoramaApplicationInstanceManifestPayload {

}
```


### DataAwsccPanoramaApplicationInstanceTags <a name="DataAwsccPanoramaApplicationInstanceTags" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpanoramaapplicationinstance"

&dataawsccpanoramaapplicationinstance.DataAwsccPanoramaApplicationInstanceTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference <a name="DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpanoramaapplicationinstance"

dataawsccpanoramaapplicationinstance.NewDataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.payloadData">PayloadData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayload">DataAwsccPanoramaApplicationInstanceManifestOverridesPayload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PayloadData`<sup>Required</sup> <a name="PayloadData" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.payloadData"></a>

```go
func PayloadData() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPanoramaApplicationInstanceManifestOverridesPayload
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestOverridesPayload">DataAwsccPanoramaApplicationInstanceManifestOverridesPayload</a>

---


### DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference <a name="DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpanoramaapplicationinstance"

dataawsccpanoramaapplicationinstance.NewDataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.property.payloadData">PayloadData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayload">DataAwsccPanoramaApplicationInstanceManifestPayload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PayloadData`<sup>Required</sup> <a name="PayloadData" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.property.payloadData"></a>

```go
func PayloadData() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPanoramaApplicationInstanceManifestPayload
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceManifestPayload">DataAwsccPanoramaApplicationInstanceManifestPayload</a>

---


### DataAwsccPanoramaApplicationInstanceTagsList <a name="DataAwsccPanoramaApplicationInstanceTagsList" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpanoramaapplicationinstance"

dataawsccpanoramaapplicationinstance.NewDataAwsccPanoramaApplicationInstanceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccPanoramaApplicationInstanceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccPanoramaApplicationInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccPanoramaApplicationInstanceTagsOutputReference <a name="DataAwsccPanoramaApplicationInstanceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpanoramaapplicationinstance"

dataawsccpanoramaapplicationinstance.NewDataAwsccPanoramaApplicationInstanceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccPanoramaApplicationInstanceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTags">DataAwsccPanoramaApplicationInstanceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPanoramaApplicationInstanceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPanoramaApplicationInstance.DataAwsccPanoramaApplicationInstanceTags">DataAwsccPanoramaApplicationInstanceTags</a>

---



