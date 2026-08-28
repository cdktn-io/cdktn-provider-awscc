# `dataAwsccCloudfrontOriginRequestPolicy` Submodule <a name="`dataAwsccCloudfrontOriginRequestPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudfrontOriginRequestPolicy <a name="DataAwsccCloudfrontOriginRequestPolicy" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cloudfront_origin_request_policy awscc_cloudfront_origin_request_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer"></a>

```typescript
import { dataAwsccCloudfrontOriginRequestPolicy } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy(scope: Construct, id: string, config: DataAwsccCloudfrontOriginRequestPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig">DataAwsccCloudfrontOriginRequestPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig">DataAwsccCloudfrontOriginRequestPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudfrontOriginRequestPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isConstruct"></a>

```typescript
import { dataAwsccCloudfrontOriginRequestPolicy } from '@cdktn/provider-awscc'

dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformElement"></a>

```typescript
import { dataAwsccCloudfrontOriginRequestPolicy } from '@cdktn/provider-awscc'

dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformDataSource"></a>

```typescript
import { dataAwsccCloudfrontOriginRequestPolicy } from '@cdktn/provider-awscc'

dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport"></a>

```typescript
import { dataAwsccCloudfrontOriginRequestPolicy } from '@cdktn/provider-awscc'

dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCloudfrontOriginRequestPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCloudfrontOriginRequestPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCloudfrontOriginRequestPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cloudfront_origin_request_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudfrontOriginRequestPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.originRequestPolicyConfig">originRequestPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.originRequestPolicyId">originRequestPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `originRequestPolicyConfig`<sup>Required</sup> <a name="originRequestPolicyConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.originRequestPolicyConfig"></a>

```typescript
public readonly originRequestPolicyConfig: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference</a>

---

##### `originRequestPolicyId`<sup>Required</sup> <a name="originRequestPolicyId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.originRequestPolicyId"></a>

```typescript
public readonly originRequestPolicyId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudfrontOriginRequestPolicyConfig <a name="DataAwsccCloudfrontOriginRequestPolicyConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.Initializer"></a>

```typescript
import { dataAwsccCloudfrontOriginRequestPolicy } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontOriginRequestPolicyConfig: dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cloudfront_origin_request_policy#id DataAwsccCloudfrontOriginRequestPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig.Initializer"></a>

```typescript
import { dataAwsccCloudfrontOriginRequestPolicy } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig: dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig = { ... }
```


### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig.Initializer"></a>

```typescript
import { dataAwsccCloudfrontOriginRequestPolicy } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig: dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig = { ... }
```


### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig.Initializer"></a>

```typescript
import { dataAwsccCloudfrontOriginRequestPolicy } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig: dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig = { ... }
```


### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig.Initializer"></a>

```typescript
import { dataAwsccCloudfrontOriginRequestPolicy } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig: dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontOriginRequestPolicy } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.cookieBehavior">cookieBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.cookies">cookies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookieBehavior`<sup>Required</sup> <a name="cookieBehavior" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.cookieBehavior"></a>

```typescript
public readonly cookieBehavior: string;
```

- *Type:* string

---

##### `cookies`<sup>Required</sup> <a name="cookies" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.cookies"></a>

```typescript
public readonly cookies: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig</a>

---


### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontOriginRequestPolicy } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.headerBehavior">headerBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.headers">headers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerBehavior`<sup>Required</sup> <a name="headerBehavior" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.headerBehavior"></a>

```typescript
public readonly headerBehavior: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.headers"></a>

```typescript
public readonly headers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig</a>

---


### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontOriginRequestPolicy } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.cookiesConfig">cookiesConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.headersConfig">headersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.queryStringsConfig">queryStringsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `cookiesConfig`<sup>Required</sup> <a name="cookiesConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.cookiesConfig"></a>

```typescript
public readonly cookiesConfig: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference</a>

---

##### `headersConfig`<sup>Required</sup> <a name="headersConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.headersConfig"></a>

```typescript
public readonly headersConfig: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `queryStringsConfig`<sup>Required</sup> <a name="queryStringsConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.queryStringsConfig"></a>

```typescript
public readonly queryStringsConfig: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig</a>

---


### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontOriginRequestPolicy } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.queryStringBehavior">queryStringBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.queryStrings">queryStrings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryStringBehavior`<sup>Required</sup> <a name="queryStringBehavior" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.queryStringBehavior"></a>

```typescript
public readonly queryStringBehavior: string;
```

- *Type:* string

---

##### `queryStrings`<sup>Required</sup> <a name="queryStrings" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.queryStrings"></a>

```typescript
public readonly queryStrings: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig</a>

---



