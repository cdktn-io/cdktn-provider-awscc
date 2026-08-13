# `dataAwsccRoute53ResolverResolverQueryLoggingConfig` Submodule <a name="`dataAwsccRoute53ResolverResolverQueryLoggingConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53ResolverResolverQueryLoggingConfig <a name="DataAwsccRoute53ResolverResolverQueryLoggingConfig" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53resolver_resolver_query_logging_config awscc_route53resolver_resolver_query_logging_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.Initializer"></a>

```typescript
import { dataAwsccRoute53ResolverResolverQueryLoggingConfig } from '@cdktn/provider-awscc'

new dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig(scope: Construct, id: string, config: DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig">DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig">DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRoute53ResolverResolverQueryLoggingConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.isConstruct"></a>

```typescript
import { dataAwsccRoute53ResolverResolverQueryLoggingConfig } from '@cdktn/provider-awscc'

dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.isTerraformElement"></a>

```typescript
import { dataAwsccRoute53ResolverResolverQueryLoggingConfig } from '@cdktn/provider-awscc'

dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.isTerraformDataSource"></a>

```typescript
import { dataAwsccRoute53ResolverResolverQueryLoggingConfig } from '@cdktn/provider-awscc'

dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.generateConfigForImport"></a>

```typescript
import { dataAwsccRoute53ResolverResolverQueryLoggingConfig } from '@cdktn/provider-awscc'

dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccRoute53ResolverResolverQueryLoggingConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRoute53ResolverResolverQueryLoggingConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRoute53ResolverResolverQueryLoggingConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53resolver_resolver_query_logging_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53ResolverResolverQueryLoggingConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.associationCount">associationCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.creatorRequestId">creatorRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.destinationArn">destinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.resolverQueryLoggingConfigId">resolverQueryLoggingConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.shareStatus">shareStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList">DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `associationCount`<sup>Required</sup> <a name="associationCount" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.associationCount"></a>

```typescript
public readonly associationCount: number;
```

- *Type:* number

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `creatorRequestId`<sup>Required</sup> <a name="creatorRequestId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.creatorRequestId"></a>

```typescript
public readonly creatorRequestId: string;
```

- *Type:* string

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `resolverQueryLoggingConfigId`<sup>Required</sup> <a name="resolverQueryLoggingConfigId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.resolverQueryLoggingConfigId"></a>

```typescript
public readonly resolverQueryLoggingConfigId: string;
```

- *Type:* string

---

##### `shareStatus`<sup>Required</sup> <a name="shareStatus" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.shareStatus"></a>

```typescript
public readonly shareStatus: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.tags"></a>

```typescript
public readonly tags: DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList">DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig <a name="DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig.Initializer"></a>

```typescript
import { dataAwsccRoute53ResolverResolverQueryLoggingConfig } from '@cdktn/provider-awscc'

const dataAwsccRoute53ResolverResolverQueryLoggingConfigConfig: dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53resolver_resolver_query_logging_config#id DataAwsccRoute53ResolverResolverQueryLoggingConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRoute53ResolverResolverQueryLoggingConfigTags <a name="DataAwsccRoute53ResolverResolverQueryLoggingConfigTags" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTags.Initializer"></a>

```typescript
import { dataAwsccRoute53ResolverResolverQueryLoggingConfig } from '@cdktn/provider-awscc'

const dataAwsccRoute53ResolverResolverQueryLoggingConfigTags: dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList <a name="DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList.Initializer"></a>

```typescript
import { dataAwsccRoute53ResolverResolverQueryLoggingConfig } from '@cdktn/provider-awscc'

new dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList.get"></a>

```typescript
public get(index: number): DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference <a name="DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRoute53ResolverResolverQueryLoggingConfig } from '@cdktn/provider-awscc'

new dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTags">DataAwsccRoute53ResolverResolverQueryLoggingConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRoute53ResolverResolverQueryLoggingConfigTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfig.DataAwsccRoute53ResolverResolverQueryLoggingConfigTags">DataAwsccRoute53ResolverResolverQueryLoggingConfigTags</a>

---



