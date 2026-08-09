# `dataAwsccS3AccessGrantsInstance` Submodule <a name="`dataAwsccS3AccessGrantsInstance` Submodule" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3AccessGrantsInstance <a name="DataAwsccS3AccessGrantsInstance" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3_access_grants_instance awscc_s3_access_grants_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3accessgrantsinstance"

dataawsccs3accessgrantsinstance.NewDataAwsccS3AccessGrantsInstance(scope Construct, id *string, config DataAwsccS3AccessGrantsInstanceConfig) DataAwsccS3AccessGrantsInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceConfig">DataAwsccS3AccessGrantsInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceConfig">DataAwsccS3AccessGrantsInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccS3AccessGrantsInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3accessgrantsinstance"

dataawsccs3accessgrantsinstance.DataAwsccS3AccessGrantsInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3accessgrantsinstance"

dataawsccs3accessgrantsinstance.DataAwsccS3AccessGrantsInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3accessgrantsinstance"

dataawsccs3accessgrantsinstance.DataAwsccS3AccessGrantsInstance_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3accessgrantsinstance"

dataawsccs3accessgrantsinstance.DataAwsccS3AccessGrantsInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccS3AccessGrantsInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccS3AccessGrantsInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccS3AccessGrantsInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3_access_grants_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3AccessGrantsInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.accessGrantsInstanceArn">AccessGrantsInstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.accessGrantsInstanceId">AccessGrantsInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.identityCenterArn">IdentityCenterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList">DataAwsccS3AccessGrantsInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AccessGrantsInstanceArn`<sup>Required</sup> <a name="AccessGrantsInstanceArn" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.accessGrantsInstanceArn"></a>

```go
func AccessGrantsInstanceArn() *string
```

- *Type:* *string

---

##### `AccessGrantsInstanceId`<sup>Required</sup> <a name="AccessGrantsInstanceId" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.accessGrantsInstanceId"></a>

```go
func AccessGrantsInstanceId() *string
```

- *Type:* *string

---

##### `IdentityCenterArn`<sup>Required</sup> <a name="IdentityCenterArn" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.identityCenterArn"></a>

```go
func IdentityCenterArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.tags"></a>

```go
func Tags() DataAwsccS3AccessGrantsInstanceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList">DataAwsccS3AccessGrantsInstanceTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3AccessGrantsInstanceConfig <a name="DataAwsccS3AccessGrantsInstanceConfig" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3accessgrantsinstance"

&dataawsccs3accessgrantsinstance.DataAwsccS3AccessGrantsInstanceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3_access_grants_instance#id DataAwsccS3AccessGrantsInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccS3AccessGrantsInstanceTags <a name="DataAwsccS3AccessGrantsInstanceTags" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3accessgrantsinstance"

&dataawsccs3accessgrantsinstance.DataAwsccS3AccessGrantsInstanceTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccS3AccessGrantsInstanceTagsList <a name="DataAwsccS3AccessGrantsInstanceTagsList" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3accessgrantsinstance"

dataawsccs3accessgrantsinstance.NewDataAwsccS3AccessGrantsInstanceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccS3AccessGrantsInstanceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccS3AccessGrantsInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccS3AccessGrantsInstanceTagsOutputReference <a name="DataAwsccS3AccessGrantsInstanceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3accessgrantsinstance"

dataawsccs3accessgrantsinstance.NewDataAwsccS3AccessGrantsInstanceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccS3AccessGrantsInstanceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTags">DataAwsccS3AccessGrantsInstanceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3AccessGrantsInstanceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3AccessGrantsInstance.DataAwsccS3AccessGrantsInstanceTags">DataAwsccS3AccessGrantsInstanceTags</a>

---



