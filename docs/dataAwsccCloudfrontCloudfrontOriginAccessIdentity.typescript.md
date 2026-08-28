# `dataAwsccCloudfrontCloudfrontOriginAccessIdentity` Submodule <a name="`dataAwsccCloudfrontCloudfrontOriginAccessIdentity` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudfrontCloudfrontOriginAccessIdentity <a name="DataAwsccCloudfrontCloudfrontOriginAccessIdentity" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cloudfront_cloudfront_origin_access_identity awscc_cloudfront_cloudfront_origin_access_identity}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer"></a>

```typescript
import { dataAwsccCloudfrontCloudfrontOriginAccessIdentity } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity(scope: Construct, id: string, config: DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig">DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig">DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudfrontCloudfrontOriginAccessIdentity resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.isConstruct"></a>

```typescript
import { dataAwsccCloudfrontCloudfrontOriginAccessIdentity } from '@cdktn/provider-awscc'

dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.isTerraformElement"></a>

```typescript
import { dataAwsccCloudfrontCloudfrontOriginAccessIdentity } from '@cdktn/provider-awscc'

dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.isTerraformDataSource"></a>

```typescript
import { dataAwsccCloudfrontCloudfrontOriginAccessIdentity } from '@cdktn/provider-awscc'

dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport"></a>

```typescript
import { dataAwsccCloudfrontCloudfrontOriginAccessIdentity } from '@cdktn/provider-awscc'

dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCloudfrontCloudfrontOriginAccessIdentity resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCloudfrontCloudfrontOriginAccessIdentity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCloudfrontCloudfrontOriginAccessIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cloudfront_cloudfront_origin_access_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudfrontCloudfrontOriginAccessIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.cloudfrontOriginAccessIdentityConfig">cloudfrontOriginAccessIdentityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference">DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.cloudfrontOriginAccessIdentityId">cloudfrontOriginAccessIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.s3CanonicalUserId">s3CanonicalUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `cloudfrontOriginAccessIdentityConfig`<sup>Required</sup> <a name="cloudfrontOriginAccessIdentityConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.cloudfrontOriginAccessIdentityConfig"></a>

```typescript
public readonly cloudfrontOriginAccessIdentityConfig: DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference">DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference</a>

---

##### `cloudfrontOriginAccessIdentityId`<sup>Required</sup> <a name="cloudfrontOriginAccessIdentityId" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.cloudfrontOriginAccessIdentityId"></a>

```typescript
public readonly cloudfrontOriginAccessIdentityId: string;
```

- *Type:* string

---

##### `s3CanonicalUserId`<sup>Required</sup> <a name="s3CanonicalUserId" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.s3CanonicalUserId"></a>

```typescript
public readonly s3CanonicalUserId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig <a name="DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig.Initializer"></a>

```typescript
import { dataAwsccCloudfrontCloudfrontOriginAccessIdentity } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig: dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig = { ... }
```


### DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig <a name="DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.Initializer"></a>

```typescript
import { dataAwsccCloudfrontCloudfrontOriginAccessIdentity } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig: dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cloudfront_cloudfront_origin_access_identity#id DataAwsccCloudfrontCloudfrontOriginAccessIdentity#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference <a name="DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontCloudfrontOriginAccessIdentity } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig">DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig">DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig</a>

---



