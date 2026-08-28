# `dataAwsccMediapackagev2OriginEndpointPolicy` Submodule <a name="`dataAwsccMediapackagev2OriginEndpointPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediapackagev2OriginEndpointPolicy <a name="DataAwsccMediapackagev2OriginEndpointPolicy" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediapackagev2_origin_endpoint_policy awscc_mediapackagev2_origin_endpoint_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpointPolicy } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy(scope: Construct, id: string, config: DataAwsccMediapackagev2OriginEndpointPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig">DataAwsccMediapackagev2OriginEndpointPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig">DataAwsccMediapackagev2OriginEndpointPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediapackagev2OriginEndpointPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.isConstruct"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpointPolicy } from '@cdktn/provider-awscc'

dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.isTerraformElement"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpointPolicy } from '@cdktn/provider-awscc'

dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.isTerraformDataSource"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpointPolicy } from '@cdktn/provider-awscc'

dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.generateConfigForImport"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpointPolicy } from '@cdktn/provider-awscc'

dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccMediapackagev2OriginEndpointPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMediapackagev2OriginEndpointPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMediapackagev2OriginEndpointPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediapackagev2_origin_endpoint_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediapackagev2OriginEndpointPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.cdnAuthConfiguration">cdnAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.channelGroupName">channelGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.originEndpointName">originEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `cdnAuthConfiguration`<sup>Required</sup> <a name="cdnAuthConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.cdnAuthConfiguration"></a>

```typescript
public readonly cdnAuthConfiguration: DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference</a>

---

##### `channelGroupName`<sup>Required</sup> <a name="channelGroupName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.channelGroupName"></a>

```typescript
public readonly channelGroupName: string;
```

- *Type:* string

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `originEndpointName`<sup>Required</sup> <a name="originEndpointName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.originEndpointName"></a>

```typescript
public readonly originEndpointName: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration <a name="DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpointPolicy } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration: dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration = { ... }
```


### DataAwsccMediapackagev2OriginEndpointPolicyConfig <a name="DataAwsccMediapackagev2OriginEndpointPolicyConfig" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpointPolicy } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointPolicyConfig: dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediapackagev2_origin_endpoint_policy#id DataAwsccMediapackagev2OriginEndpointPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpointPolicy } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.cdnIdentifierSecretArns">cdnIdentifierSecretArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.secretsRoleArn">secretsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration">DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cdnIdentifierSecretArns`<sup>Required</sup> <a name="cdnIdentifierSecretArns" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.cdnIdentifierSecretArns"></a>

```typescript
public readonly cdnIdentifierSecretArns: string[];
```

- *Type:* string[]

---

##### `secretsRoleArn`<sup>Required</sup> <a name="secretsRoleArn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.secretsRoleArn"></a>

```typescript
public readonly secretsRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpointPolicy.DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration">DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a>

---



