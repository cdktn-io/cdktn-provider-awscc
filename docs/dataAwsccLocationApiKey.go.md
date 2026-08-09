# `dataAwsccLocationApiKey` Submodule <a name="`dataAwsccLocationApiKey` Submodule" id="@cdktn/provider-awscc.dataAwsccLocationApiKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLocationApiKey <a name="DataAwsccLocationApiKey" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/location_api_key awscc_location_api_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclocationapikey"

dataawscclocationapikey.NewDataAwsccLocationApiKey(scope Construct, id *string, config DataAwsccLocationApiKeyConfig) DataAwsccLocationApiKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyConfig">DataAwsccLocationApiKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyConfig">DataAwsccLocationApiKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLocationApiKey resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclocationapikey"

dataawscclocationapikey.DataAwsccLocationApiKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclocationapikey"

dataawscclocationapikey.DataAwsccLocationApiKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclocationapikey"

dataawscclocationapikey.DataAwsccLocationApiKey_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclocationapikey"

dataawscclocationapikey.DataAwsccLocationApiKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccLocationApiKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccLocationApiKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccLocationApiKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/location_api_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLocationApiKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.forceDelete">ForceDelete</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.forceUpdate">ForceUpdate</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.keyArn">KeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.noExpiry">NoExpiry</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.restrictions">Restrictions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference">DataAwsccLocationApiKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList">DataAwsccLocationApiKeyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.forceDelete"></a>

```go
func ForceDelete() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ForceUpdate`<sup>Required</sup> <a name="ForceUpdate" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.forceUpdate"></a>

```go
func ForceUpdate() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.keyArn"></a>

```go
func KeyArn() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `NoExpiry`<sup>Required</sup> <a name="NoExpiry" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.noExpiry"></a>

```go
func NoExpiry() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Restrictions`<sup>Required</sup> <a name="Restrictions" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.restrictions"></a>

```go
func Restrictions() DataAwsccLocationApiKeyRestrictionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference">DataAwsccLocationApiKeyRestrictionsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.tags"></a>

```go
func Tags() DataAwsccLocationApiKeyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList">DataAwsccLocationApiKeyTagsList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLocationApiKeyConfig <a name="DataAwsccLocationApiKeyConfig" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclocationapikey"

&dataawscclocationapikey.DataAwsccLocationApiKeyConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/location_api_key#id DataAwsccLocationApiKey#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLocationApiKeyRestrictions <a name="DataAwsccLocationApiKeyRestrictions" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclocationapikey"

&dataawscclocationapikey.DataAwsccLocationApiKeyRestrictions {

}
```


### DataAwsccLocationApiKeyRestrictionsAllowAndroidApps <a name="DataAwsccLocationApiKeyRestrictionsAllowAndroidApps" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidApps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidApps.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclocationapikey"

&dataawscclocationapikey.DataAwsccLocationApiKeyRestrictionsAllowAndroidApps {

}
```


### DataAwsccLocationApiKeyRestrictionsAllowAppleApps <a name="DataAwsccLocationApiKeyRestrictionsAllowAppleApps" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleApps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleApps.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclocationapikey"

&dataawscclocationapikey.DataAwsccLocationApiKeyRestrictionsAllowAppleApps {

}
```


### DataAwsccLocationApiKeyTags <a name="DataAwsccLocationApiKeyTags" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclocationapikey"

&dataawscclocationapikey.DataAwsccLocationApiKeyTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList <a name="DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclocationapikey"

dataawscclocationapikey.NewDataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList.get"></a>

```go
func Get(index *f64) DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference <a name="DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclocationapikey"

dataawscclocationapikey.NewDataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.certificateFingerprint">CertificateFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.package">Package</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidApps">DataAwsccLocationApiKeyRestrictionsAllowAndroidApps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateFingerprint`<sup>Required</sup> <a name="CertificateFingerprint" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.certificateFingerprint"></a>

```go
func CertificateFingerprint() *string
```

- *Type:* *string

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.package"></a>

```go
func Package() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLocationApiKeyRestrictionsAllowAndroidApps
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidApps">DataAwsccLocationApiKeyRestrictionsAllowAndroidApps</a>

---


### DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList <a name="DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclocationapikey"

dataawscclocationapikey.NewDataAwsccLocationApiKeyRestrictionsAllowAppleAppsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList.get"></a>

```go
func Get(index *f64) DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference <a name="DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclocationapikey"

dataawscclocationapikey.NewDataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.bundleId">BundleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleApps">DataAwsccLocationApiKeyRestrictionsAllowAppleApps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.bundleId"></a>

```go
func BundleId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLocationApiKeyRestrictionsAllowAppleApps
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleApps">DataAwsccLocationApiKeyRestrictionsAllowAppleApps</a>

---


### DataAwsccLocationApiKeyRestrictionsOutputReference <a name="DataAwsccLocationApiKeyRestrictionsOutputReference" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclocationapikey"

dataawscclocationapikey.NewDataAwsccLocationApiKeyRestrictionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLocationApiKeyRestrictionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.property.allowActions">AllowActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.property.allowAndroidApps">AllowAndroidApps</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList">DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.property.allowAppleApps">AllowAppleApps</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList">DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.property.allowReferers">AllowReferers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.property.allowResources">AllowResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictions">DataAwsccLocationApiKeyRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowActions`<sup>Required</sup> <a name="AllowActions" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.property.allowActions"></a>

```go
func AllowActions() *[]*string
```

- *Type:* *[]*string

---

##### `AllowAndroidApps`<sup>Required</sup> <a name="AllowAndroidApps" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.property.allowAndroidApps"></a>

```go
func AllowAndroidApps() DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList">DataAwsccLocationApiKeyRestrictionsAllowAndroidAppsList</a>

---

##### `AllowAppleApps`<sup>Required</sup> <a name="AllowAppleApps" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.property.allowAppleApps"></a>

```go
func AllowAppleApps() DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList">DataAwsccLocationApiKeyRestrictionsAllowAppleAppsList</a>

---

##### `AllowReferers`<sup>Required</sup> <a name="AllowReferers" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.property.allowReferers"></a>

```go
func AllowReferers() *[]*string
```

- *Type:* *[]*string

---

##### `AllowResources`<sup>Required</sup> <a name="AllowResources" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.property.allowResources"></a>

```go
func AllowResources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLocationApiKeyRestrictions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyRestrictions">DataAwsccLocationApiKeyRestrictions</a>

---


### DataAwsccLocationApiKeyTagsList <a name="DataAwsccLocationApiKeyTagsList" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclocationapikey"

dataawscclocationapikey.NewDataAwsccLocationApiKeyTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLocationApiKeyTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList.get"></a>

```go
func Get(index *f64) DataAwsccLocationApiKeyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLocationApiKeyTagsOutputReference <a name="DataAwsccLocationApiKeyTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclocationapikey"

dataawscclocationapikey.NewDataAwsccLocationApiKeyTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLocationApiKeyTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTags">DataAwsccLocationApiKeyTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLocationApiKeyTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLocationApiKey.DataAwsccLocationApiKeyTags">DataAwsccLocationApiKeyTags</a>

---



