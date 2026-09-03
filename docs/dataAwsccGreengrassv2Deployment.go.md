# `dataAwsccGreengrassv2Deployment` Submodule <a name="`dataAwsccGreengrassv2Deployment` Submodule" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGreengrassv2Deployment <a name="DataAwsccGreengrassv2Deployment" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/greengrassv2_deployment awscc_greengrassv2_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

dataawsccgreengrassv2deployment.NewDataAwsccGreengrassv2Deployment(scope Construct, id *string, config DataAwsccGreengrassv2DeploymentConfig) DataAwsccGreengrassv2Deployment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig">DataAwsccGreengrassv2DeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig">DataAwsccGreengrassv2DeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGreengrassv2Deployment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

dataawsccgreengrassv2deployment.DataAwsccGreengrassv2Deployment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

dataawsccgreengrassv2deployment.DataAwsccGreengrassv2Deployment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

dataawsccgreengrassv2deployment.DataAwsccGreengrassv2Deployment_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

dataawsccgreengrassv2deployment.DataAwsccGreengrassv2Deployment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccGreengrassv2Deployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccGreengrassv2Deployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccGreengrassv2Deployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/greengrassv2_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGreengrassv2Deployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.components">Components</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap">DataAwsccGreengrassv2DeploymentComponentsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.deploymentName">DeploymentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.deploymentPolicies">DeploymentPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference">DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.iotJobConfiguration">IotJobConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference">DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.parentTargetArn">ParentTargetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.targetArn">TargetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Components`<sup>Required</sup> <a name="Components" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.components"></a>

```go
func Components() DataAwsccGreengrassv2DeploymentComponentsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap">DataAwsccGreengrassv2DeploymentComponentsMap</a>

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `DeploymentName`<sup>Required</sup> <a name="DeploymentName" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.deploymentName"></a>

```go
func DeploymentName() *string
```

- *Type:* *string

---

##### `DeploymentPolicies`<sup>Required</sup> <a name="DeploymentPolicies" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.deploymentPolicies"></a>

```go
func DeploymentPolicies() DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference">DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference</a>

---

##### `IotJobConfiguration`<sup>Required</sup> <a name="IotJobConfiguration" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.iotJobConfiguration"></a>

```go
func IotJobConfiguration() DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference">DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference</a>

---

##### `ParentTargetArn`<sup>Required</sup> <a name="ParentTargetArn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.parentTargetArn"></a>

```go
func ParentTargetArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.targetArn"></a>

```go
func TargetArn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGreengrassv2DeploymentComponents <a name="DataAwsccGreengrassv2DeploymentComponents" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponents.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

&dataawsccgreengrassv2deployment.DataAwsccGreengrassv2DeploymentComponents {

}
```


### DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate <a name="DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

&dataawsccgreengrassv2deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate {

}
```


### DataAwsccGreengrassv2DeploymentComponentsRunWith <a name="DataAwsccGreengrassv2DeploymentComponentsRunWith" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWith"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWith.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

&dataawsccgreengrassv2deployment.DataAwsccGreengrassv2DeploymentComponentsRunWith {

}
```


### DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits <a name="DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

&dataawsccgreengrassv2deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits {

}
```


### DataAwsccGreengrassv2DeploymentConfig <a name="DataAwsccGreengrassv2DeploymentConfig" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

&dataawsccgreengrassv2deployment.DataAwsccGreengrassv2DeploymentConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/greengrassv2_deployment#id DataAwsccGreengrassv2Deployment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGreengrassv2DeploymentDeploymentPolicies <a name="DataAwsccGreengrassv2DeploymentDeploymentPolicies" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPolicies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

&dataawsccgreengrassv2deployment.DataAwsccGreengrassv2DeploymentDeploymentPolicies {

}
```


### DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy <a name="DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

&dataawsccgreengrassv2deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy {

}
```


### DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy <a name="DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

&dataawsccgreengrassv2deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy {

}
```


### DataAwsccGreengrassv2DeploymentIotJobConfiguration <a name="DataAwsccGreengrassv2DeploymentIotJobConfiguration" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

&dataawsccgreengrassv2deployment.DataAwsccGreengrassv2DeploymentIotJobConfiguration {

}
```


### DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

&dataawsccgreengrassv2deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig {

}
```


### DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

&dataawsccgreengrassv2deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct {

}
```


### DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

&dataawsccgreengrassv2deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig {

}
```


### DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

&dataawsccgreengrassv2deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate {

}
```


### DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

&dataawsccgreengrassv2deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria {

}
```


### DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

&dataawsccgreengrassv2deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference <a name="DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

dataawsccgreengrassv2deployment.NewDataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.merge">Merge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.reset">Reset</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate">DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Merge`<sup>Required</sup> <a name="Merge" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.merge"></a>

```go
func Merge() *string
```

- *Type:* *string

---

##### `Reset`<sup>Required</sup> <a name="Reset" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.reset"></a>

```go
func Reset() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate">DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate</a>

---


### DataAwsccGreengrassv2DeploymentComponentsMap <a name="DataAwsccGreengrassv2DeploymentComponentsMap" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

dataawsccgreengrassv2deployment.NewDataAwsccGreengrassv2DeploymentComponentsMap(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGreengrassv2DeploymentComponentsMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.get"></a>

```go
func Get(key *string) DataAwsccGreengrassv2DeploymentComponentsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGreengrassv2DeploymentComponentsOutputReference <a name="DataAwsccGreengrassv2DeploymentComponentsOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

dataawsccgreengrassv2deployment.NewDataAwsccGreengrassv2DeploymentComponentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) DataAwsccGreengrassv2DeploymentComponentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.property.componentVersion">ComponentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.property.configurationUpdate">ConfigurationUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference">DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.property.runWith">RunWith</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference">DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponents">DataAwsccGreengrassv2DeploymentComponents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComponentVersion`<sup>Required</sup> <a name="ComponentVersion" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.property.componentVersion"></a>

```go
func ComponentVersion() *string
```

- *Type:* *string

---

##### `ConfigurationUpdate`<sup>Required</sup> <a name="ConfigurationUpdate" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.property.configurationUpdate"></a>

```go
func ConfigurationUpdate() DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference">DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference</a>

---

##### `RunWith`<sup>Required</sup> <a name="RunWith" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.property.runWith"></a>

```go
func RunWith() DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference">DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGreengrassv2DeploymentComponents
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponents">DataAwsccGreengrassv2DeploymentComponents</a>

---


### DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference <a name="DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

dataawsccgreengrassv2deployment.NewDataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.property.posixUser">PosixUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.property.systemResourceLimits">SystemResourceLimits</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference">DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.property.windowsUser">WindowsUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWith">DataAwsccGreengrassv2DeploymentComponentsRunWith</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PosixUser`<sup>Required</sup> <a name="PosixUser" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.property.posixUser"></a>

```go
func PosixUser() *string
```

- *Type:* *string

---

##### `SystemResourceLimits`<sup>Required</sup> <a name="SystemResourceLimits" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.property.systemResourceLimits"></a>

```go
func SystemResourceLimits() DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference">DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference</a>

---

##### `WindowsUser`<sup>Required</sup> <a name="WindowsUser" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.property.windowsUser"></a>

```go
func WindowsUser() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGreengrassv2DeploymentComponentsRunWith
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWith">DataAwsccGreengrassv2DeploymentComponentsRunWith</a>

---


### DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference <a name="DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

dataawsccgreengrassv2deployment.NewDataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.cpus">Cpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.memory">Memory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits">DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cpus`<sup>Required</sup> <a name="Cpus" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.cpus"></a>

```go
func Cpus() *f64
```

- *Type:* *f64

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.memory"></a>

```go
func Memory() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits">DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits</a>

---


### DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference <a name="DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

dataawsccgreengrassv2deployment.NewDataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy">DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy">DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy</a>

---


### DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference <a name="DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

dataawsccgreengrassv2deployment.NewDataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy">DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy">DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy</a>

---


### DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference <a name="DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

dataawsccgreengrassv2deployment.NewDataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.property.componentUpdatePolicy">ComponentUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference">DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.property.configurationValidationPolicy">ConfigurationValidationPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference">DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.property.failureHandlingPolicy">FailureHandlingPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPolicies">DataAwsccGreengrassv2DeploymentDeploymentPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComponentUpdatePolicy`<sup>Required</sup> <a name="ComponentUpdatePolicy" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.property.componentUpdatePolicy"></a>

```go
func ComponentUpdatePolicy() DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference">DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference</a>

---

##### `ConfigurationValidationPolicy`<sup>Required</sup> <a name="ConfigurationValidationPolicy" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.property.configurationValidationPolicy"></a>

```go
func ConfigurationValidationPolicy() DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference">DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference</a>

---

##### `FailureHandlingPolicy`<sup>Required</sup> <a name="FailureHandlingPolicy" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.property.failureHandlingPolicy"></a>

```go
func FailureHandlingPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGreengrassv2DeploymentDeploymentPolicies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPolicies">DataAwsccGreengrassv2DeploymentDeploymentPolicies</a>

---


### DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

dataawsccgreengrassv2deployment.NewDataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.get"></a>

```go
func Get(index *f64) DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

dataawsccgreengrassv2deployment.NewDataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.failureType">FailureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings">MinNumberOfExecutedThings</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage">ThresholdPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct">DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `FailureType`<sup>Required</sup> <a name="FailureType" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.failureType"></a>

```go
func FailureType() *string
```

- *Type:* *string

---

##### `MinNumberOfExecutedThings`<sup>Required</sup> <a name="MinNumberOfExecutedThings" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings"></a>

```go
func MinNumberOfExecutedThings() *f64
```

- *Type:* *f64

---

##### `ThresholdPercentage`<sup>Required</sup> <a name="ThresholdPercentage" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage"></a>

```go
func ThresholdPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct">DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct</a>

---


### DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

dataawsccgreengrassv2deployment.NewDataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.criteriaList">CriteriaList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList">DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig">DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CriteriaList`<sup>Required</sup> <a name="CriteriaList" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.criteriaList"></a>

```go
func CriteriaList() DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList">DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig">DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig</a>

---


### DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

dataawsccgreengrassv2deployment.NewDataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute">BaseRatePerMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor">IncrementFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria">RateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate">DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseRatePerMinute`<sup>Required</sup> <a name="BaseRatePerMinute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute"></a>

```go
func BaseRatePerMinute() *f64
```

- *Type:* *f64

---

##### `IncrementFactor`<sup>Required</sup> <a name="IncrementFactor" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor"></a>

```go
func IncrementFactor() *f64
```

- *Type:* *f64

---

##### `RateIncreaseCriteria`<sup>Required</sup> <a name="RateIncreaseCriteria" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria"></a>

```go
func RateIncreaseCriteria() DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate">DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate</a>

---


### DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

dataawsccgreengrassv2deployment.NewDataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings">NumberOfNotifiedThings</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings">NumberOfSucceededThings</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NumberOfNotifiedThings`<sup>Required</sup> <a name="NumberOfNotifiedThings" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings"></a>

```go
func NumberOfNotifiedThings() *f64
```

- *Type:* *f64

---

##### `NumberOfSucceededThings`<sup>Required</sup> <a name="NumberOfSucceededThings" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings"></a>

```go
func NumberOfSucceededThings() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---


### DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

dataawsccgreengrassv2deployment.NewDataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.exponentialRate">ExponentialRate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference">DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute">MaximumPerMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig">DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExponentialRate`<sup>Required</sup> <a name="ExponentialRate" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.exponentialRate"></a>

```go
func ExponentialRate() DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference">DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference</a>

---

##### `MaximumPerMinute`<sup>Required</sup> <a name="MaximumPerMinute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute"></a>

```go
func MaximumPerMinute() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig">DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig</a>

---


### DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

dataawsccgreengrassv2deployment.NewDataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.property.abortConfig">AbortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference">DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.property.jobExecutionsRolloutConfig">JobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference">DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.property.timeoutConfig">TimeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference">DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfiguration">DataAwsccGreengrassv2DeploymentIotJobConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AbortConfig`<sup>Required</sup> <a name="AbortConfig" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.property.abortConfig"></a>

```go
func AbortConfig() DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference">DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference</a>

---

##### `JobExecutionsRolloutConfig`<sup>Required</sup> <a name="JobExecutionsRolloutConfig" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.property.jobExecutionsRolloutConfig"></a>

```go
func JobExecutionsRolloutConfig() DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference">DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference</a>

---

##### `TimeoutConfig`<sup>Required</sup> <a name="TimeoutConfig" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.property.timeoutConfig"></a>

```go
func TimeoutConfig() DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference">DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGreengrassv2DeploymentIotJobConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfiguration">DataAwsccGreengrassv2DeploymentIotJobConfiguration</a>

---


### DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgreengrassv2deployment"

dataawsccgreengrassv2deployment.NewDataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes">InProgressTimeoutInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig">DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InProgressTimeoutInMinutes`<sup>Required</sup> <a name="InProgressTimeoutInMinutes" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes"></a>

```go
func InProgressTimeoutInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig">DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig</a>

---



